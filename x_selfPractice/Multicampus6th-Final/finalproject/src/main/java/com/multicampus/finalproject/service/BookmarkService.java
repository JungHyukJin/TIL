package com.multicampus.finalproject.service;

import com.multicampus.finalproject.model.BookmarkVO;
import com.multicampus.finalproject.repository.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookmarkService {
    
    @Autowired
    UserMapper userMapper;

    public void insertBookmark(BookmarkVO bookmarkVO){
        userMapper.insertBookmark(bookmarkVO);
    }
    public BookmarkVO selectBookmark(BookmarkVO bookmarkVO){
        return userMapper.selectBookmark(bookmarkVO);
    }
    public void deleteBookmark(BookmarkVO bookmarkVO){
        userMapper.deleteBookmark(bookmarkVO);
    }
    
}