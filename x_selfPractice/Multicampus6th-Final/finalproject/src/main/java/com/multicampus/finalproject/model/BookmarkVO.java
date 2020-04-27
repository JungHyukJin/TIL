package com.multicampus.finalproject.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class BookmarkVO {
    private String userID;
    private int recipeID;
    private List<Integer> recipeIDList; 
    private List<RecommandListVO> recommandList;

    public BookmarkVO(){}
    public BookmarkVO(String userID, int recipeID){
        this.userID = userID;
        this.recipeID = recipeID;
    }
}