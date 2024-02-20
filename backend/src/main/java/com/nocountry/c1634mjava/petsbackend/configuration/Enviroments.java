package com.nocountry.c1634mjava.petsbackend.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Enviroments {


    @Bean
    @Value("${petsapi.admin.email}")
    public String adminEmail(String email){
        return email;
    }

    @Bean
    @Value("${petsapi.admin.password}")
    public String adminPassword(String password){
        return password;
    }
    @Bean
    @Value("${petsapi.jwt.secret}")
    public String jwtSecret(String jwtSecret){
        return jwtSecret;
    }
}
