// Spring Security를 추가한 후 새로 추가한 클래스

// UserDetailsService를 상속받는 구현체
// loadUserByUsername함수는 username을 인자로하여 사용자 존재여부를 판별

package com.multicampus.finalproject.service;
 
import java.util.ArrayList;
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.AllArgsConstructor;

import com.multicampus.finalproject.model.UserInfo;
import com.multicampus.finalproject.model.SecurityUserInfo;
import com.multicampus.finalproject.repository.UserMapper;
 
@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService{
    
    private static final String ROLE_PREFIX = "ROLE_";
    
    @Autowired
    UserMapper userMapper;
 
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        UserInfo userInfo = userMapper.readUser(username);
        if(userInfo != null) {
            userInfo.setAuthorities(makeGrantedAuthority(userMapper.readAuthority(username)));
        }
        return new SecurityUserInfo(userInfo);
    }
    
    private static List<GrantedAuthority> makeGrantedAuthority(List<String> roles){
        List<GrantedAuthority> list = new ArrayList<>();
        //SimpleGrantedAuthority객체 생성 시 ROLE를 붙여 Spring이 이해할 수 있도록 표현
        roles.forEach(role -> list.add(new SimpleGrantedAuthority(ROLE_PREFIX + role)));
        return list;
    }
    
    // @Transactional
    public boolean Insert_Member(UserInfo userInfo){
        //db에 비밀번호를 입력하기 전에 사용자의 보안을 위해 password를 암호화 해준다
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        //암호화된 password를 member 변수에 set해 준다
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        // //userMapper에 정의 되어 있는 insert 가 실행 된다.
        UserInfo user = userMapper.readUser(userInfo.getUsername());
        String insertUsername = userInfo.getUsername();

        if(user != null){
            return true;
        }
        else{
            userMapper.insertMember(userInfo);
            userMapper.insertAuthority(insertUsername);
            return false;
        }
    }
    
}