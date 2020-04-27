package com.multicampus.finalproject.model;

import lombok.Data;

@Data
public class RecommandListVO {
    private int id;
    private String title;
    private int size;
    private int time;
    private String level;
    private String description;
    private String main;
    private String minor;
    private String source;
    private String img_complete;
    private String step;
    private String img;
    private String ingre_main_oneline;
    private int bookmarkIsCheck;
}