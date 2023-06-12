package com.codecool.booktracker.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class BookDTO {
    private String title;
    private String[] authors;
    private String publisher;
    private String publishedDate;
    private String description;
    private int pageCount;
    private String mainCategory;
    private float averageRating;
    private int ratingsCount;
    private String language;
}
