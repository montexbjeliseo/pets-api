package com.nocountry.c1634mjava.petsbackend.configuration;


import com.nocountry.c1634mjava.petsbackend.utils.Constants;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers(
                                HttpMethod.POST,
                                Constants.Endpoints.LOGIN,
                                Constants.Endpoints.REGISTER
                        ).permitAll()
                        .requestMatchers(
                                HttpMethod.GET,
                                Constants.Endpoints.PETS,
                                Constants.Endpoints.PETS_ID
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                .build();
    }

}
