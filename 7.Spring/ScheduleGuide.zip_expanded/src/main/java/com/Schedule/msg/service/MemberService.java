package com.Schedule.msg.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Schedule.msg.dao.IMemberRepository;
import com.Schedule.msg.model.MemberVO;

@Service
public class MemberService implements IMemberService {
	@Autowired
	IMemberRepository memRepository;
	
	@Override
	public void insertMember(MemberVO mem) {
		memRepository.insertMember(mem);
	}

	@Override
	public List<MemberVO> getMemList() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map<String, Object>> getAllDeptId() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map<String, Object>> getAllJobId() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map<String, Object>> getAllManagerId() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void checkMember(MemberVO mem) {
		memRepository.checkMember(mem);
		
	}
}
