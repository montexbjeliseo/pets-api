package com.nocountry.c1634mjava.petsbackend.configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
        info = @Info(
                title = "Pets API documentation",
                version = "0.0.1",
                description = "Pets API documentation"
        )
)
public class OpenAPIConfig {
}
