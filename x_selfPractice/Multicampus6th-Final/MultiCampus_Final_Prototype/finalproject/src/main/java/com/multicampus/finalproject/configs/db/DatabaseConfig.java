package com.multicampus.finalproject.configs.db;
 
import javax.sql.DataSource;

import com.multicampus.finalproject.GlobalPropertySource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.transaction.annotation.EnableTransactionManagement;
 
@Configuration
@MapperScan(basePackages="com.multicampus.finalproject.repository")
@EnableTransactionManagement
public class DatabaseConfig {
    
    @Autowired
    GlobalPropertySource globalPropertySource;
    // 원래라면 root-context.xml에서 정의했을 부분이다.
    // application.properties에서 정의한 dataSource의 정보를 이용한다.
    // mybatis 기본이용법이니 참고자료는 구글링하시길


    //DataSource를 custom하기 위해 사용한다.
    @Bean
    @Primary
    // 클래스에서 정의한 메소드를 사용해 DataSource형태를 정의한다.
    public DataSource customDataSource(){
      return DataSourceBuilder
      .create()
      .url(globalPropertySource.getUrl())
      .driverClassName(globalPropertySource.getDriverClassName())
      .username(globalPropertySource.getUsername())
      .password(globalPropertySource.getPassword())
      .build();
    }


    // 기존 parameter 에서 datasource로 자동설정된 정보를 사용했지만
    // custom한 DataSource 정보를 사용하도록 바꾸어준다.
    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource customDataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(customDataSource);
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        sessionFactory.setMapperLocations(resolver.getResources("classpath:mybatis/mapper/*.xml"));
        return sessionFactory.getObject();
    }
    
    @Bean
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) throws Exception {
      final SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory);
      return sqlSessionTemplate;
    }
 
 
}