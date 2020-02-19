package com.Schedule.msg.model;

import java.sql.Date;

public class ScheduleListVO {

	private int id;

	private String title;
	private Date startDate;
	private Date endDate;
	private boolean emphasis;
	private String memo;
	private String email; // 얘는 member의 email을 받아오고 싶은데 방법을 몰라서 db열에 넣은 email을 받아서 넣기위해 만들엇음

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public boolean getEmphasis() {
		return emphasis;
		//getter
	}

	public void setEmphasis(boolean emphasis) {
		this.emphasis = emphasis;
		//setter
	}


	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@Override
	public String toString() {
		return "ScheduleListVO [id=" + id + ", title=" + title + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", emphasis=" + emphasis + ", memo=" + memo + ", email=" + email + "]";
	}

}