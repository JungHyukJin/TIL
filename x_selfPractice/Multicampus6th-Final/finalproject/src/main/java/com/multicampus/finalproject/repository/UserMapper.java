package com.multicampus.finalproject.repository;
 
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.multicampus.finalproject.model.BookmarkVO;
import java.util.List;

import com.multicampus.finalproject.model.BookmarkVO;
import com.multicampus.finalproject.model.RecommandListVO;
 
import com.multicampus.finalproject.model.UserInfo;



// Mapper이다. 그저 interface로 정의한다.
// interface로 정의된 mapper는 service와의 의존성이 있다.
public interface UserMapper {
 
    public List<UserInfo> getAll() throws Exception;

    public UserInfo readUser(String username);
 
    public List<String> readAuthority(String username);

    public void insertMember(UserInfo userInfo);

    public void insertAuthority(String username);

    public void insertBookmark(BookmarkVO bookmarkVO);
    
    public void deleteBookmark(BookmarkVO bookmarkVO);

    public BookmarkVO selectBookmark(BookmarkVO bookmarkVO);

    public ArrayList<Integer> loadBookmark(String userID);
    // public int[] loadBookmark(String userID);
    // public ArrayList<Float> loadBookmark(String userID);
    // public HashMap<String,Integer> loadBookmark(String userID);


    
    public List<RecommandListVO> readRecipeList(ArrayList<Integer> idList);

    public RecommandListVO readRecipe(int recipeId);

    public int getSearchPageNum(String keyword);

    public List<RecommandListVO> searchRecipeList(int page, String keyword);
    public int isBookmark(String userID , int recipeID);
}
