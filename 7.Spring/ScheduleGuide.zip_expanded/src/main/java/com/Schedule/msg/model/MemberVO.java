package com.Schedule.msg.model;
import java.sql.Date;
public class MemberVO {
	public String email;
	public String name;
	public String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "EmpVO [email=" + email + 
				", name=" + name
				+ ", password=" + password +  "]";

}}
