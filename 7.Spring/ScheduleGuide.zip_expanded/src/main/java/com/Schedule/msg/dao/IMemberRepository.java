package com.Schedule.msg.dao;
import java.util.Map;

import com.Schedule.msg.model.MemberVO;

public interface IMemberRepository {
	void insertMember(MemberVO mem);
	void checkMember(MemberVO mem);
}
