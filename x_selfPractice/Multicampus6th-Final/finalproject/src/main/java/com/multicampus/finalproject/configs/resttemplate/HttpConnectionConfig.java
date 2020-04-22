package com.multicampus.finalproject.configs.resttemplate;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
@Configuration
public class HttpConnectionConfig{

    @Bean
    public RestTemplate getCustomRestTemplate(){
        HttpComponentsClientHttpRequestFactory httpRequestFactory 
                        = new HttpComponentsClientHttpRequestFactory();
        httpRequestFactory.setConnectTimeout(10000000);
        httpRequestFactory.setReadTimeout(10000000);
        //connetPool 설정
        HttpClient httpClient = HttpClientBuilder.create()
                                //connectPool 갯수
                                .setMaxConnTotal(200)
                                //ip,port 하나당 연결 제한 갯수
                                .setMaxConnPerRoute(20)
                                .build();
        
        httpRequestFactory.setHttpClient(httpClient);
        return new RestTemplate(httpRequestFactory);
    }
}


