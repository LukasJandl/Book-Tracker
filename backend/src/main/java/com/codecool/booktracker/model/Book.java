package com.codecool.booktracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String googleId;
    public String title;
    private String authors;
    private String publisher;
    private String publishedDate;
    @Column(columnDefinition = "TEXT")
    private String description;
    private int pageCount;
    private String categories;
    private float averageRating;
    private int ratingsCount;
    private String language;
    private String thumbnail;
    private String status;
}
