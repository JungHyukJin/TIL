package com.multicampus.finalproject.handlers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

public class CustomLogoutSuccessHandler implements LogoutSuccessHandler{	

    public CustomLogoutSuccessHandler(String defaultUrl){

    }
    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
                             Authentication authentication) throws IOException, ServletException {
        if (authentication != null && authentication.getDetails() != null) {
            try {
                HttpSession session = request.getSession();

                String redirectUrl = (String) session.getAttribute("prevPage");
                if(redirectUrl != null){
                    response.sendRedirect(redirectUrl);
                    session.removeAttribute("prevPage");
                }
                else{
                    response.sendRedirect("/");
                }
                request.getSession().invalidate();
            } catch (Exception e) {
                e.printStackTrace();
            }
        } 
        response.setStatus(HttpServletResponse.SC_OK);




        
    }


    
}