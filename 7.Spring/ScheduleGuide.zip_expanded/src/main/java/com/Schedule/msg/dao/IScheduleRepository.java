package com.Schedule.msg.dao;

import java.util.List;

import com.Schedule.msg.model.ScheduleListVO;

public interface IScheduleRepository {
	
	List<ScheduleListVO> getScheduleList();
	ScheduleListVO getScheduleDetail(int s_id);
	void updateSchedule(ScheduleListVO sList);
	void insertSchedule(ScheduleListVO sList);
	void deleteSchedule(int s_id);	// ScheduleList의 s_email도 전달받아야하는건지
	void deleteMember(String m_email);
	
	// List<Map<String, Object>> getAllCategory(); // 일정 추가에 색인 기능 추가하면 구현할거임

}
