package com.codecool.booktracker.logic;

import com.codecool.booktracker.model.response.ResponseMessage;
import com.codecool.booktracker.model.User;
import com.codecool.booktracker.model.repositories.UserRepository;
import com.codecool.booktracker.security.jwt.JwtGenerator;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthEndpointService {
    private final JwtGenerator jwtGenerator;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthEndpointService(JwtGenerator jwtGenerator, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.jwtGenerator = jwtGenerator;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String authenticate(Authentication authentication) {
        return jwtGenerator.generate(authentication);
    }

    public ResponseEntity<?> register(User user) {
        if(userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body(new ResponseMessage("Username already in use!"));
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body(new ResponseMessage("Email already in use!"));
        }
        user.getRoles().add("User");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        return ResponseEntity.ok(new ResponseMessage("User registered successfully!"));
    }
}
