package com.multicampus.finalproject.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

import lombok.Getter;
@Getter
public class JsonVO {
    @XmlElement(name="response_img")
    private String response_img="default";
    @XmlElement(name="labels")
    private ArrayList<String> labels;
}