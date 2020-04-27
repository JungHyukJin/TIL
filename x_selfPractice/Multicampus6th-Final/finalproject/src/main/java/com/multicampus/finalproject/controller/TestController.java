package com.multicampus.finalproject.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

import com.multicampus.finalproject.model.BookmarkVO;
import com.multicampus.finalproject.model.JsonVO;
import com.multicampus.finalproject.model.LabelJsonVO;
import com.multicampus.finalproject.model.SecurityUserInfo;
import com.multicampus.finalproject.service.BookmarkService;
import com.multicampus.finalproject.service.RestTemplateService;
import com.multicampus.finalproject.service.UserInfoService;
import com.multicampus.finalproject.model.RecommandListVO;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TestController {

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    RestTemplateService restTemplateService;

    @Autowired
    BookmarkService bookmarkService;

    @RequestMapping("/")
    public String home() {
        return "main";
    }

    @RequestMapping("/guide")
    public String guide() {
        return "guide";
    }

    @RequestMapping("/camera")
    public String camera() {
        return "camera";
    }

    @RequestMapping("/upload_img")
    public String upload_img(Model model, @RequestParam("file") MultipartFile img) {
        byte[] imgtext;
        String imgtext2;
        try {
            // bytes로 변환한 이미지
            imgtext = Base64.encodeBase64(img.getBytes());
            // Flask_API로 보내줘야 하기 때문에 String으로 변환한다
            imgtext2 = new String(imgtext);
            // string으로 바꾼 img를 api로 보내주고 만들어 놓은 JsonVO형태로 Flask api에서 보내준 Json을 받는다.
            ResponseEntity<JsonVO> detectResultJson = restTemplateService.addData(imgtext2);

            // jsonVO의 필드 변수로 있는 Reponse_img를 img_json에 저장
            String img_json = detectResultJson.getBody().getResponse_img();
            // 라벨 가져 오기
            ArrayList<String> label_json = detectResultJson.getBody().getLabels();

            StringBuilder sb = new StringBuilder();

            // 앞단에 img를 보내줘야 하기 때문에 형식을 맞춘다 (data:image/타입;base64,변환된 img)
            sb.append("data:image/jpg;base64,");
            sb.append(img_json);
            // model 객체를 통해 앞단으로 보낸다.
            model.addAttribute("uploadedImage", sb);
            System.out.println("라벨은: " + label_json);
            model.addAttribute("label", label_json);

        } catch (IOException except) {
            System.out.println("파일이 이상함!");
        }

        return "resultCheck";
    }

    @RequestMapping(value = "/recomand", method = RequestMethod.GET)
    public String recomand(Model model, @RequestParam("label") ArrayList<String> name,
            @AuthenticationPrincipal SecurityUserInfo securityUserInfo) throws Exception {
        // for(String label : name){
        // System.out.println(label);
        // }
        System.out.println("추천 전: " + name);
        ResponseEntity<LabelJsonVO> recomandResult = restTemplateService.getRecomandData(name);
        ArrayList<Integer> recomandList = recomandResult.getBody().getRecomandResult();

        // for(int i=0;i<recomandList.size();i++){
        // System.out.println(recomandList.get(i));
        // }
        List<RecommandListVO> recipeList = userInfoService.readRecipeList(recomandList);
        try {
            for (int i = 0; i < recipeList.size(); i++) {
                System.out.print(bookmarkService.isBookmark(securityUserInfo.getUsername(), recipeList.get(i).getId()));
                recipeList.get(i).setBookmarkIsCheck(
                        bookmarkService.isBookmark(securityUserInfo.getUsername(), recipeList.get(i).getId()));
            }

            model.addAttribute("recipeList", recipeList);

            return "resultList";
        } catch (NullPointerException e) {
            model.addAttribute("recipeList", recipeList);

            return "resultList";
        }
    }

    @RequestMapping(value = "/insertBookmark", method = RequestMethod.POST)
    @ResponseBody
    public BookmarkVO insertBookmark(@RequestBody BookmarkVO resBody,
            @AuthenticationPrincipal SecurityUserInfo securityUserInfo) {
        // 세션에 저장 되어 있는 id를 가져옴
        String userID = securityUserInfo.getUsername();
        // 브라우저에서 json으로 넘어온 레시피 id를 int로 변환
        int recipeID = resBody.getRecipeID();
        // 체크 되었는지 안되었는지 확인 할 수 있는 변수
        // db로 보낼 VO객체 생성
        BookmarkVO bookmarkVO = new BookmarkVO(userID, recipeID);
        System.out.println(bookmarkVO.getRecipeID());
        if (bookmarkService.selectBookmark(bookmarkVO) != null) {
            bookmarkService.deleteBookmark(bookmarkVO);
        } else {
            bookmarkService.insertBookmark(bookmarkVO);
        }
        System.out.println("userID: " + bookmarkVO.getUserID() + "recipeID: " + bookmarkVO.getRecipeID());
        System.out.println(bookmarkService.loadBookmark(userID));
        bookmarkVO.setRecipeIDList(bookmarkService.loadBookmark(userID));
        return bookmarkVO;
    }

    @RequestMapping(value = "/loadBookmark", method = RequestMethod.GET)
    @ResponseBody
    public BookmarkVO loadBookmark(@AuthenticationPrincipal SecurityUserInfo securityUserInfo) {
        String userID = securityUserInfo.getUsername();

        BookmarkVO bookmarkVO = new BookmarkVO();
        ArrayList<Integer> bookmarkRecipeIDLists = bookmarkService.loadBookmark(userID);

        if (bookmarkService.loadBookmark(userID) != null) {
            bookmarkVO.setRecipeIDList(bookmarkService.loadBookmark(userID));

            List<RecommandListVO> recommandList = userInfoService.readRecipeList(bookmarkRecipeIDLists);
            // System.out.println("re" + recommandList);
            // System.out.println(bookmarkRecipeIDLists);
            bookmarkVO.setRecommandList(recommandList);
        }

        return bookmarkVO;
    }

    @RequestMapping(value = "/recipe/{recipeId}")
    public String viewRecipe(Model model, @PathVariable("recipeId") int recipeId) {
        RecommandListVO recipe = userInfoService.readRecipe(recipeId);

        System.out.println(recipe.getDescription());
        System.out.println(recipe.getImg_complete());
        System.out.println(recipe.getDescription());
        model.addAttribute("recipe", recipe);
        return "resultRecipe";
    }

    @RequestMapping(value = "/search")
    public String search() {
        return "search";
    }

    @RequestMapping(value = "/search/{keyword}/{page}")
    public String searchResult(Model model, @AuthenticationPrincipal SecurityUserInfo securityUserInfo,
            @PathVariable(required = false, value = "keyword") String keyword,
            @PathVariable(required = false, value = "page") int page) {
        page = (page - 1) * 10;
        int pageNum = userInfoService.getSearchPageNum(keyword);

        if (pageNum % 10 != 0) {
            pageNum = pageNum / 10 + 1;
        }

        List<RecommandListVO> searchResult = userInfoService.searchRecipeList(page, keyword);
        try {
            for (int i = 0; i < searchResult.size(); i++) {
                System.out
                        .print(bookmarkService.isBookmark(securityUserInfo.getUsername(), searchResult.get(i).getId()));
                searchResult.get(i).setBookmarkIsCheck(
                        bookmarkService.isBookmark(securityUserInfo.getUsername(), searchResult.get(i).getId()));
            }

            model.addAttribute("pageNum", pageNum);
            model.addAttribute("recipeList", searchResult);
            System.out.println(searchResult);

            return "searchResult";
        } catch (NullPointerException e) {

            model.addAttribute("pageNum", pageNum);
            model.addAttribute("recipeList", searchResult);
            return "searchResult";
        }

    }
}