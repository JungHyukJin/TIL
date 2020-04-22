package com.multicampus.finalproject.model;

import lombok.Data;

@Data
public class BookmarkVO {
    private String userID;
    private int recipeID;


    public BookmarkVO(){}
    public BookmarkVO(String userID, int recipeID){
        this.userID = userID;
        this.recipeID = recipeID;
    }
}