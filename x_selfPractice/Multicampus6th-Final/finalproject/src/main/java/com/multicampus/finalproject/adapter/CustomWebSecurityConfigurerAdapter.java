// Spring Security를 추가한 후 새로 추가한 클래스
// 여기는 암호화 방식에 대한 password encoder를 정의하고
// 각종 요청에 대한 ignore, login page에 대한 처리 구동이 정의

// 지금은 간단히 넘어가지만 추후에 변경해도 좋음!

package com.multicampus.finalproject.adapter;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.multicampus.finalproject.service.CustomUserDetailsService;
import com.multicampus.finalproject.handlers.*;

@Configuration
@EnableWebSecurity
public class CustomWebSecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {
    
    @Autowired
    CustomUserDetailsService customUserDetailsService;
    
    @Bean
    public PasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
    }
    
    // 로그인 성공 핸들러 작성 후 추가된부분
    // 로그인 성공 시의 로직을 커스텀하여 사용하겠다.
    @Bean
    public AuthenticationSuccessHandler myLoginSuccessHandler(){
        return new CustomLoginSuccessHandler("/");
    }

    @Bean
    public LogoutSuccessHandler myLogoutSuccessHandler(){
        return new CustomLogoutSuccessHandler("/");
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
        .antMatchers("/openapi/**");
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .csrf().disable()
        .authorizeRequests()
        .antMatchers("/user/**").authenticated()
        .antMatchers("/**").permitAll()

        .anyRequest().authenticated()
        .and()
        .formLogin().loginPage("/login")
        .usernameParameter("email")
        .passwordParameter("password")
        // .loginProcessingUrl("/login")
        // .defaultSuccessUrl("/home")
        // .failureUrl("/fail")
        .successHandler(myLoginSuccessHandler())

        .and()
        .logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
        .logoutSuccessHandler(myLogoutSuccessHandler())
        .invalidateHttpSession(true);
        ;
    }
 
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }
 
}