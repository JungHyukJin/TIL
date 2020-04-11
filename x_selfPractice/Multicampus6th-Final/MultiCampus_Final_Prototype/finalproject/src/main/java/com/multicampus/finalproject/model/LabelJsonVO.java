package com.multicampus.finalproject.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;

import lombok.Getter;
@Getter
public class LabelJsonVO {
    @XmlElement(name="recomandResult")
    private ArrayList<String> recomandResult;
}