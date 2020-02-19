package com.Schedule.msg.service;

import java.util.List;
import java.util.Map;

import com.Schedule.msg.model.MemberVO;

public interface IMemberService {
	List<MemberVO> getMemList();
	void insertMember(MemberVO mem);
	void checkMember(MemberVO mem);
	List<Map<String, Object>> getAllDeptId();
	List<Map<String, Object>> getAllJobId();
	List<Map<String, Object>> getAllManagerId();

}
