package com.codecool.booktracker.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UtilsConfiguration {

    @Bean
    ObjectMapper objectMapper(){
        return new ObjectMapper();
    }
}
