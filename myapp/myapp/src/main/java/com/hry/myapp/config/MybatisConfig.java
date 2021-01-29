package com.hry.myapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;


@Configuration
public class MybatisConfig {

	@Bean
    public PaginationInterceptor paginationInterceptor() {
        return new PaginationInterceptor();
    }
	
}
