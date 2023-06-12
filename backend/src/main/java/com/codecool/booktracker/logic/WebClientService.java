package com.codecool.booktracker.logic;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

@Service
public class WebClientService {

    public WebClient.Builder getWebClientBuilder(){
        return WebClient.builder();
    }
    public String get(String api, String params, String apiKey)
            throws WebClientResponseException{
        return getWebClientBuilder().build()
                .get()
                .uri(api + params + apiKey)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
