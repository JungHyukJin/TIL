package com.Schedule.msg.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.Schedule.msg.HomeController;
import com.Schedule.msg.model.MemberVO;


@Repository
public class MemberRepository implements IMemberRepository{
	
	private static final Logger logger = LoggerFactory.getLogger(MemberRepository.class);
	
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	@Override
	public void insertMember(MemberVO mem) {
		String sql = "insert into member (m_email,m_name,m_password)"
				+ "values (?,?,?)";
		jdbcTemplate.update(sql, 
				mem.getEmail(), 
				mem.getName(), 
				mem.getPassword()
		);
	}
	
	
	@Override
	public void checkMember(MemberVO mem) {
		String sql = "select * from member where m_email=" + "values(mem.getEmail())";

		logger.info(sql);			

	}
	
	
	
	
}
	
//	private class MemMapper implements RowMapper<MemberVO> {
//		@Override
//		public MemberVO mapRow(ResultSet rs, int count) throws SQLException {
//			MemberVO mem = new MemberVO();
//			
//
//}}
//	@Override
//	public void insertMember(MemberVO mem) {
//		String sql = "insert into employees (email,name,password"
//				+ "values (?,?,?,?,?,sysdate,?,?,?,?,?)";
//		jdbcTemplate.update(sql, 
//				mem.getEmail(), 
//				mem.getName(), 
//				mem.getPassword()
//		);
//	}
//}