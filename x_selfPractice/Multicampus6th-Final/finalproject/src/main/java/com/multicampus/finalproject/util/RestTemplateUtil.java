package com.multicampus.finalproject.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;

import com.multicampus.finalproject.model.JsonVO;
import com.multicampus.finalproject.model.LabelJsonVO;

@Component
public class RestTemplateUtil {

    private static RestTemplate restTemplate;

    @Autowired
    public RestTemplateUtil(RestTemplate restTemplate) {
        this.restTemplate=restTemplate;
    }

    // public static XmlVo getXmlResponse(){
    //     return restTemplate.getForObject("http://localhost:8080/xml", XmlVo.class);
    // }



    
    // public static ResponseEntity<String> getResponseEntity(String key){
    //     //header setting
    //     HttpHeaders headers = new HttpHeaders();
    //     headers.add("Authentication", key);


    //     HttpEntity<Map<String, String>> httpEntity = new HttpEntity<>(headers);

    //     Map<String, String> params = new HashMap<>();
    //     params.put("name", "jaeyeon");

    //     //순서대로 url, method, entity(header, params), return type
    //     return restTemplate.exchange("http://localhost:8080/entity?name={name}", HttpMethod.GET, httpEntity, String.class, params);
    // }

    public static ResponseEntity<JsonVO> post(String imgString){
        // return restTemplate.postForEntity("http://70.12.50.158:5000/testapi",imgString, JsonVO.class);
        return restTemplate.postForEntity("http://localhost:5000/testapi",imgString, JsonVO.class);
    }
    public static ResponseEntity<LabelJsonVO> postRecomandJsonRsponse(ArrayList<String> label){
        // return restTemplate.postForEntity("http://70.12.50.158:5000/recomandApi",label, LabelJsonVO.class);
        return restTemplate.postForEntity("http://localhost:5000/recomandApi",label, LabelJsonVO.class);
    }
}