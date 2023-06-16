package com.codecool.booktracker.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class VolumeInfoDTO {
    public String title;
    private String[] authors;
    private String publisher;
    private String publishedDate;
    private String description;
    private int pageCount;
    private String[] categories;
    private float averageRating;
    private int ratingsCount;
    private String language;
    @JsonProperty("imageLinks")
    private ImageLinksDTO imageLinksDTO;
}
