package com.hry.myapp.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.hry.myapp.beans.Users;



@Mapper
public interface IUserMapper extends BaseMapper<Users> {
	
	public int getCount();
}
