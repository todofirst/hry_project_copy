package com.hry.myapp.beans;

import org.springframework.stereotype.Component;

import lombok.Data;


public class Users {
	
	private Integer age ;
	private Integer id ;
	private String name ;
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	
	

}