package com.multicampus.finalproject.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.multicampus.finalproject.model.JsonVO;
import com.multicampus.finalproject.model.LabelJsonVO;
import com.multicampus.finalproject.model.UserInfo;
import com.multicampus.finalproject.service.RestTemplateService;
import com.multicampus.finalproject.service.UserInfoService;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class TestController{

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    RestTemplateService restTemplateService;

    
    @RequestMapping("/")
    public String home(){
        return "main";
    }
    @RequestMapping("/search")
    public String search(){
        return "search";
    }
    @RequestMapping("/guide")
    public String guide(){
        return "guide";
    }

    @RequestMapping("/camera")
    public String camera(){
        return "camera";
    }

    @RequestMapping("/upload_img")
    public String upload_img(Model model,@RequestParam("file") MultipartFile img){

               
        byte[] imgtext;
        String imgtext2;
        try{
            // bytes로 변환한 이미지
            imgtext = Base64.encodeBase64(img.getBytes());
            // Flask_API로 보내줘야 하기 때문에 String으로 변환한다
            imgtext2 = new String(imgtext);

            // string으로 바꾼 img를 api로 보내주고 만들어 놓은 JsonVO형태로 Flask api에서 보내준 Json을 받는다.
            ResponseEntity<JsonVO> detectResultJson = restTemplateService.addData(imgtext2);
            
            //jsonVO의 필드 변수로 있는 Reponse_img를 img_json에 저장
            String img_json = detectResultJson.getBody().getResponse_img();
            //라벨 가져 오기
            ArrayList<String> label_json = detectResultJson.getBody().getLabels();

            StringBuilder sb = new StringBuilder();

            // 앞단에 img를 보내줘야 하기 때문에 형식을 맞춘다 (data:image/타입;base64,변환된 img)
            sb.append("data:image/jpg;base64,");
            sb.append(img_json);
            //model 객체를 통해 앞단으로 보낸다.
            model.addAttribute("uploadedImage",sb);
            System.out.println("라벨은: "+label_json);
            model.addAttribute("label", label_json);

        }
        catch(IOException except){
            System.out.println("파일이 이상함!");
        }
        
        return "resultCheck";
    }
    @RequestMapping(value="/recomand", method=RequestMethod.GET)
    public String recomand(Model model ,@RequestParam("label") ArrayList<String> name) throws Exception {
        // for(String label : name){
        //     System.out.println(label);
        // }
        System.out.println("추천 전: " + name);
        ResponseEntity<LabelJsonVO> recomandResult = restTemplateService.getRecomandData(name);
        ArrayList<String> recomandList = recomandResult.getBody().getRecomandResult();
        
        model.addAttribute("recipe", recomandList);
        return "resultRecipe";
    }
    
}