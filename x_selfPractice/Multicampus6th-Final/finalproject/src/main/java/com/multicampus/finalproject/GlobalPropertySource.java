package com.multicampus.finalproject;
 
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

import lombok.Getter;
 
// Bean객체를 생성하기위한 class임을 명시한다.
@Configuration
// 가져올 설정파일의 경로를 입력한다.
// 현재는 classpath에 올렸지만 따로 관리하여 정보은닉을 하도록한다.
@Getter
@PropertySources({
    @PropertySource( value = "classpath:config.properties", ignoreResourceNotFound = true ),
})
public class GlobalPropertySource {
    // ${가져올 값} -> 설정파일에서 정의한 값을 불러온다.
    @Value("${spring.datasource.driverClassName}")
    private String driverClassName;
    
    @Value("${spring.datasource.url}")
    private String url;
    
    @Value("${spring.datasource.username}")
    private String username;
    
    @Value("${spring.datasource.password}")
    private String password;
 
}