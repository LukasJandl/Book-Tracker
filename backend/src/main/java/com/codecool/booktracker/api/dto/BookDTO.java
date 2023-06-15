package com.codecool.booktracker.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class BookDTO {
    private String id;
    @JsonProperty("volumeInfo")
    private VolumeInfoDTO volumeInfoDTO;
}
