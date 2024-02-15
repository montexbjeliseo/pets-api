package com.nocountry.c1634mjava.petsbackend.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH")
                .allowedHeaders("*")
                .maxAge(3600)
                .allowCredentials(true)
                .allowedHeaders("Authorization", "Cache-Control", "Content-Type", "Access-Control-Allow-Credentials", "Access-Control-Allow-Origin");
    }

}
