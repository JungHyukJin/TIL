package com.Schedule.msg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Schedule.msg.dao.IScheduleRepository;
import com.Schedule.msg.model.*;

@Service
public class ScheduleService implements IScheduleService{
	
	@Autowired
	IScheduleRepository scheduleRepository;
	
	@Override
	public List<ScheduleListVO> getScheduleList(){
		return scheduleRepository.getScheduleList();
	}
	
	@Override
	public ScheduleListVO getScheduleDetail(int s_id) {
		return scheduleRepository.getScheduleDetail(s_id);
	}
	
	@Override
	public void updateSchedule(ScheduleListVO sList) {
		scheduleRepository.updateSchedule(sList);
	}
	
	@Override
	public void insertSchedule(ScheduleListVO sList) {
		scheduleRepository.insertSchedule(sList);
	}
	
	@Override
	public void deleteSchedule(int s_id) {
		scheduleRepository.deleteSchedule(s_id);
	}
	
	@Override
	public void deleteMember(String m_email) {
		scheduleRepository.deleteMember(m_email);
	}

}
