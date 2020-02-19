package com.Schedule.msg.service;

import java.util.List;

import com.Schedule.msg.model.*;

public interface IScheduleService {
	
	List<ScheduleListVO> getScheduleList();
	ScheduleListVO getScheduleDetail(int s_id);
	void updateSchedule(ScheduleListVO sList);
	void insertSchedule(ScheduleListVO sList);
	void deleteSchedule(int s_id);	// ScheduleList의 s_email도 전달받아야하는건지
	void deleteMember(String m_email);
}
