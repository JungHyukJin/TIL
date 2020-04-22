 
package com.multicampus.finalproject.model;

import org.springframework.security.core.userdetails.User;

import lombok.Data;

@Data
public class SecurityUserInfo extends User{
    
    private static final long serialVersionUID = 1L;
    
    private String ip;
    
    public SecurityUserInfo(UserInfo userinfo) {
        super(userinfo.getUsername(), userinfo.getPassword(), userinfo.getAuthorities());
    }
    
    
}
    