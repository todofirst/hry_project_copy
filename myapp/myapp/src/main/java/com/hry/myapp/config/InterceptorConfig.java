package com.hry.myapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.hry.myapp.interceptor.GlobalInterceptor;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		
		registry.addInterceptor(new GlobalInterceptor())
				.addPathPatterns("/**")
				.excludePathPatterns("/","/login","/test");
	}

}
