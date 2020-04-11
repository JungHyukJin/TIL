package com.multicampus.finalproject.repository;
 
import java.util.List;
 
import com.multicampus.finalproject.model.UserInfo;



// Mapper이다. 그저 interface로 정의한다.
// interface로 정의된 mapper는 service와의 의존성이 있다.

public interface UserMapper {
 
    public List<UserInfo> getAll() throws Exception;

    public UserInfo readUser(String username);
 
    public List<String> readAuthority(String username);

    public void insertMember(UserInfo userInfo);

    public void insertAuthority(String username);
}
