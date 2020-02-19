
package com.Schedule.msg.dao;

import com.Schedule.msg.HomeController;
import com.Schedule.msg.model.ScheduleListVO;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class ScheduleRepository implements IScheduleRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	private class ScheduleMapper implements RowMapper<ScheduleListVO> {
		@Override
		public ScheduleListVO mapRow(ResultSet rs, int count) throws SQLException {
			ScheduleListVO schList = new ScheduleListVO();
			schList.setId(rs.getInt("s_id"));
			schList.setTitle(rs.getString("s_title"));
			schList.setStartDate(rs.getDate("s_startdate"));
			schList.setEndDate(rs.getDate("s_enddate"));
			schList.setEmphasis(rs.getBoolean("s_emphasis"));
			schList.setMemo(rs.getString("s_memo"));
			schList.setEmail(rs.getString("s_email"));
			return schList;
		}
	}

	@Override
	public void insertSchedule(ScheduleListVO sList) {
		//System.out.println(sList.getEndDate());
		//System.out.println(sList.getId());
		String sql = "insert into schedule " 
	            + "(s_id, s_title, s_startdate, s_enddate, "
	            + "s_emphasis, s_memo, s_email ) " 
	            + "values (id_seq.nextval,?,?,?,?,?,null) ";
		jdbcTemplate.update(sql, 				
				sList.getTitle(),
				sList.getStartDate(),
				sList.getEndDate(),
				sList.getEmphasis(),
				sList.getMemo()
				);
	}

	// schedule 테이블 속성: S_ID, S_TITLE, S_STARTDATE, S_ENDDATE, S_EMPHASIS, S_MEMO,
	// S_ALARM, S_EMAIL
	// schedule 테이블 속성: s_id, s_title, s_startdate, s_enddate, s_emphasis, s_memo,
	// s_alarm, s_email

	@Override
	public List<ScheduleListVO> getScheduleList() {
		String sql = "select * from schedule";
		return jdbcTemplate.query(sql, new RowMapper<ScheduleListVO>() {
			public ScheduleListVO mapRow(ResultSet rs, int count) throws SQLException {
				ScheduleListVO schList = new ScheduleListVO();
				schList.setId(rs.getInt("s_id"));
				schList.setTitle(rs.getString("s_title"));
				schList.setStartDate(rs.getDate("s_startdate"));
				schList.setEndDate(rs.getDate("s_enddate"));
				schList.setEmphasis(rs.getBoolean("s_emphasis"));
				schList.setMemo(rs.getString("s_memo"));
				schList.setEmail(rs.getString("s_email"));
				
				return schList;
			}
		});
	}

	@Override
	public ScheduleListVO getScheduleDetail(int id) {
		String sql = "select s_id, s_title, s_startdate, s_enddate, "
				+ "s_emphasis, s_memo, s_email "
				+ "from schedule where s_id=?";
		return jdbcTemplate.queryForObject(sql, new ScheduleMapper(), id);
	}

	@Override
	public void updateSchedule(ScheduleListVO sList) {
		String sql = "update schedule " + "set s_title=?, s_startdate=?, s_enddate=?, "
				+ "s_emphasis=?, s_memo=?, " + "where s_id=?";
	
		jdbcTemplate.update(sql,
				sList.getTitle(),
				sList.getStartDate(),
				sList.getEndDate(),
				sList.getEmphasis(),
				sList.getMemo());
	}

	@Override
	public void deleteSchedule(int s_id) {
		String sql = "delete from schedule where s_id=?";
		jdbcTemplate.update(sql, s_id);
	}

	@Override
	public void deleteMember(String m_email) {
		String sql = "delete from member where m_email=?";
		jdbcTemplate.update(sql, m_email);
	}

}
