package com.multicampus.finalproject.service;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.multicampus.finalproject.model.UserInfo;
import com.multicampus.finalproject.repository.UserMapper;

// Service로 정의하고 Autowired를 통해 testMapper와의 의존성을 주입해준다.
@Service
public class UserInfoService {
 
    @Autowired
    UserMapper userMapper;
    
    // testMapper로 정의된 객체를 주입받고
    // testMapper에 선언되어있는 getAll메소드를 사용한다.

    // getAll 메소드는 resource/mybatis/mapper/TestDB.xml에서 정의한다!!
    public List<UserInfo> getAll() throws Exception{
        return userMapper.getAll();
    }
}
