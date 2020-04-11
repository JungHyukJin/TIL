package com.multicampus.finalproject.model; 
import java.util.Collection;

import org.apache.ibatis.type.Alias;
// Spring Security를 추가한 후 새로 넣은부분!
import org.springframework.security.core.GrantedAuthority;

import lombok.Data;


@Data
//@Alias("UserInfo")
public class UserInfo {
 
    private String username;
    
    private String password;
    
    private String name;
    
    private boolean isAccountNonExpired;
    
    private boolean isAccountNonLocked;
    
    private boolean isCredentialsNonExpired;
    
    private boolean isEnabled;
    
    // Spring Security를 추가한 후 새로 넣은부분!
    private Collection<? extends GrantedAuthority> authorities;

    public UserInfo(String username , String password , String name){
        this.username = username;
        this.password = password;
        this.name = name;
        this.isAccountNonExpired = true;
        this.isAccountNonLocked = true;
        this.isCredentialsNonExpired = true;
        this.isEnabled = true;
        this.authorities = null;
    }
}

