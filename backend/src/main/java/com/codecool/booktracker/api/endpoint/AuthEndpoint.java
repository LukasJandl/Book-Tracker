package com.codecool.booktracker.api.endpoint;

import com.codecool.booktracker.logic.AuthEndpointService;
import com.codecool.booktracker.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthEndpoint {

    private final AuthEndpointService authEndpointService;

    public AuthEndpoint(AuthEndpointService authEndpointService) {
        this.authEndpointService = authEndpointService;
    }

    @GetMapping("/authenticate")
    public String authenticate(Authentication authentication) {
        return authEndpointService.authenticate(authentication);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        return authEndpointService.register(user);
    }

}