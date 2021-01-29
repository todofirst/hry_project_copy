package com.hry.myapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hry.myapp.beans.Users;
import com.hry.myapp.servlet.UserService;
import com.hry.myapp.servlet.impl.UserServiceImpl;

@Controller
public class TestControllers {
	

	@Autowired
	UserServiceImpl userService;
	@ResponseBody
	@GetMapping("/test")
	public int test() {
		
		return userService.count();
		
		
	}
	
	
	
	

}
