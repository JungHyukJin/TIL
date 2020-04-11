package com.multicampus.finalproject.handlers;

import java.lang.String;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.multicampus.finalproject.model.SecurityUserInfo;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;


public class CustomLoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler{
    
    public CustomLoginSuccessHandler(String defaultUrl){
        setDefaultTargetUrl(defaultUrl);
    }
    // 로그인 성공 시 동작을 정의해준다.
    // 로그인 성공 시 SecurityMember(세션정보 객체)에 IP정보를 추가해준다.
    // getClientIp 메소드를 통해 받아온다.

    // 또한 세션 정보를 받아와 앞서 접근한 URL에 대한 정보를 받아온다.
    // 로그인 시 앞서 접근한 세션내에서의 URL에 redirect해준다.
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,Authentication authentication) throws ServletException,IOException{
        // 로그인 성공시점에 IP 정보를 request를 통해 SecureMember객체에 추가한다.
        
        ((SecurityUserInfo)authentication.getPrincipal()).setIp(getClientIp(request));

        HttpSession session = request.getSession();
        if(session != null){
            String redirectUrl = (String) session.getAttribute("prevPage");
            // for(int i=0;i<10;i++){
            //     System.out.println(redirectUrl);
                
            // }
            //URL확인해보기
            if(redirectUrl != null){
                session.removeAttribute("prevPage");
                getRedirectStrategy().sendRedirect(request, response, redirectUrl);
            }
            else{
                super.onAuthenticationSuccess(request, response, authentication);
            }
        }
        else{
            super.onAuthenticationSuccess(request, response, authentication);
        }
    }
    public static String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
             ip = request.getHeader("Proxy-Client-IP");
         }
         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
             ip = request.getHeader("WL-Proxy-Client-IP");
         }
         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
             ip = request.getHeader("HTTP_CLIENT_IP");
         }
         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
             ip = request.getHeader("HTTP_X_FORWARDED_FOR");
         }
         if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
             ip = request.getRemoteAddr();
         }
         return ip;
    }
}