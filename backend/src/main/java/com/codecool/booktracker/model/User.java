package com.codecool.booktracker.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String email;
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> roles = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_books",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "book_id"))
    private List<Book> books = new ArrayList<>();

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
