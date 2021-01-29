package com.hry.myapp.servlet.impl;

import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.hry.myapp.beans.Users;
import com.hry.myapp.mapper.IUserMapper;
import com.hry.myapp.servlet.UserService;


@Service
public class UserServiceImpl extends ServiceImpl<IUserMapper, Users> implements UserService  {

}
