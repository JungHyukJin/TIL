package com.multicampus.finalproject.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.multicampus.finalproject.util.RestTemplateUtil;

import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;

import com.multicampus.finalproject.model.JsonVO;
import com.multicampus.finalproject.model.LabelJsonVO;
@Service
//@Slf4j
public class RestTemplateService {

    // public XmlVo getXmlData() {
    //     return RestTemplateUtil.getXmlResponse();
    // }


    // public ResponseEntity<String> getEntity(String key) {
    //     return RestTemplateUtil.getResponseEntity(key);
    // }
    
    public ResponseEntity<JsonVO> addData(String imgString) {
        return RestTemplateUtil.post(imgString);
    }
    public ResponseEntity<LabelJsonVO> getRecomandData(ArrayList<String> label) {
        return RestTemplateUtil.postRecomandJsonRsponse(label);
    }

}