package com.multicampus.finalproject.controller;
 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;

import com.multicampus.finalproject.model.SecurityUserInfo;
import com.multicampus.finalproject.model.UserInfo;
import com.multicampus.finalproject.service.CustomUserDetailsService;
import com.multicampus.finalproject.service.RestTemplateService;
 
@Controller
public class PropertyController {
 
    @Autowired
    CustomUserDetailsService customUserDetailsService;
    
    @RequestMapping("/user/info")
    public String info(@AuthenticationPrincipal SecurityUserInfo securityUserInfo){
        
        return "user/info";
    }
    
    // @RequestMapping("/login")
    // public String login(){
    //     return "login";
    // }

    @RequestMapping("/login")
    public String login(HttpServletRequest request){
        String referer;
        if(request.getSession().getAttribute("prevPage")==null){
            referer = request.getHeader("Referer");
            request.getSession().setAttribute("prevPage",referer);
        }
        for(int i=0;i<10;i++){
            System.out.println("uri는 : "+request.getSession().getAttribute("prevPage"));
        }
    
        return "login";
    }
    @RequestMapping("/signUp_page")
    public String signUp_page(){

        return "signUp";
    }
    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
    //브라우저에서 요청과 함께 날라온 id , password , name 값을 매개변수로 받아 온다.
    public String inser_member(
        @RequestParam("email")String id,
        @RequestParam("password")String password,
        @RequestParam("name")String name
    ) {
        //매개변수의 값을 Member 생성자를 통해 member에 set해준다.
        UserInfo userInfo = new UserInfo(id, password, name);
        // Service에서 구현해 놓은 insert_Member메서드를 실행 시켜준다
        
        System.out.println("id"+id);
        boolean isMemberExistDB = customUserDetailsService.Insert_Member(userInfo);
       
        if(isMemberExistDB == false){
            return "redirect:/";
        }
        else{
            return "redirect:/signUp_page";
        }
        //redirect를 통해 / <- url에 대한 servlet을 실행 시켜 준다.
    }


    // @RequestMapping("/login")
    // public String login(HttpServletRequest request){
    //     String referer;
    //     if(request.getSession().getAttribute("prevPage")==null){
    //         referer = request.getHeader("Referer");
    //         request.getSession().setAttribute("prevPage",referer);
    //     }
    //     for(int i=0;i<10;i++){
    //         System.out.println("uri는 : "+request.getSession().getAttribute("prevPage"));
    //     }
    //     return "login";
    // }

    // 앞서 adapter에서 ignore 해놓은 openapi경로의 URL이다.
    // @RequestMapping("/user/getProperty")
    // public @ResponseBody String getProperty(@AuthenticationPrincipal SecurityUserInfo securityUserInfo) {
        
    //     StringBuffer sb = new StringBuffer();
        
    //     // 호출할경우 login을 거치지 않기 때문에 SecurityMember 객체를 받아오지 못한다.
    //     if(securityUserInfo != null) {
    //         sb.append("securityUserInfo.getIp()=")
    //             .append(securityUserInfo.getIp())
    //             .append(" / ");
    //     }else {
    //         sb.append("securityUserInfo is null / ");
    //     }
        
        
    //     return sb.toString();
        
    // }
    
    // // 로그인 이후 접근할 수 있는 getMember URL
    // @RequestMapping("/getMember")
    // // @AuthenticationPrincipal annotation을 사용하여 SecurityMember를 자동으로 Autowired받아 사용한다.
    // public @ResponseBody String getMember(@AuthenticationPrincipal SecurityUserInfo securityUserInfo) {
        
    //     StringBuffer sb = new StringBuffer();
        
    //     // 로그인 이후 접근할 수 있으므로 정상적으로 받아온다.
    //     if(securityUserInfo != null) {
    //         sb.append("securityMember.getIp()=")
    //         .append(securityUserInfo.getIp())
    //         .append(securityUserInfo.getUsername());
    //     }
        
    //     // log를 남긴다.
        
    //     // sb -> Member정보를 return한다. ResponseBody annotation을 사용했기 때문에 값을 화면에 보여준다.
    //     return sb.toString();
        
    // }


    // //
    // @RequestMapping("/login")
    // public String login(HttpServletRequest request){
    //     String referer;
    //     if(request.getSession().getAttribute("prevPage")==null){
    //         referer = request.getHeader("Referer");
    //         request.getSession().setAttribute("prevPage",referer);
    //     }
    //     for(int i=0;i<10;i++){
    //         System.out.println("uri는 : "+request.getSession().getAttribute("prevPage"));
    //     }
    
    //     return "login";
    // }

    // @RequestMapping("/logout")
    // public void logout(HttpServletRequest request){
    //     String referer;
    //     if(request.getSession().getAttribute("prevPage")==null){
    //         referer = request.getHeader("Referer");
    //         request.getSession().setAttribute("prevPage",referer);
    //     }
    //     for(int i=0;i<10;i++){
    //         System.out.println("logout uri는 : "+request.getSession().getAttribute("prevPage"));
    //     }
    // }

    // @RequestMapping(value = "/openapi/signUp_page", method = RequestMethod.GET)
    // public String signUp_page()throws Exception {
    //     return "/openapi/signUp_page";
    // }
    
    // @RequestMapping(value = "/openapi/insertMember", method = RequestMethod.POST)
    // //브라우저에서 요청과 함께 날라온 id , password , name 값을 매개변수로 받아 온다.
    // public String inser_member(
    //     @RequestParam("id")String id,
    //     @RequestParam("password")String password,
    //     @RequestParam("name")String name
    // ) {
    //     //매개변수의 값을 Member 생성자를 통해 member에 set해준다.
    //     UserInfo userInfo = new UserInfo(id, password, name);
    //     // Service에서 구현해 놓은 insert_Member메서드를 실행 시켜준다
        
    //     boolean isMemberExistDB = customUserDetailsService.Insert_Member(userInfo);
       
    //     if(isMemberExistDB == false){
    //         return "redirect:/";
    //     }
    //     else{
    //         return "redirect:/openapi/signUp_page";
    //     }
    //     //redirect를 통해 / <- url에 대한 servlet을 실행 시켜 준다.
    // }

}