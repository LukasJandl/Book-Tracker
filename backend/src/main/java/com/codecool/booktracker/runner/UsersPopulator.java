package com.codecool.booktracker.runner;

import com.codecool.booktracker.model.User;
import com.codecool.booktracker.model.repositories.UserRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UsersPopulator {

    @Bean
    ApplicationRunner populateUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            String password = passwordEncoder.encode("user");
            User user = new User("user", "user@user.com", password);
            user.getRoles().add("User");
            userRepository.save(user);
            String password2 = passwordEncoder.encode("user2");
            User user2 = new User("user2", "user2@user.com", password2);
            user2.getRoles().add("User");
            userRepository.save(user2);
        };
    }
}
