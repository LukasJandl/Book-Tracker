package com.codecool.booktracker.logic;

import com.codecool.booktracker.api.client.BookSearchClient;
import com.codecool.booktracker.api.dto.BookDTO;
import com.codecool.booktracker.api.dto.BooksDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookSearchService {

    private final BookSearchClient bookSearchClient;
    private final ObjectMapper objectMapper;

    public BookSearchService(BookSearchClient bookSearchClient, ObjectMapper objectMapper) {
        this.bookSearchClient = bookSearchClient;
        this.objectMapper = objectMapper;
    }

    public List<BookDTO> getByName(String name) throws JsonProcessingException {
        String json = bookSearchClient.getBy(name);
        BooksDTO booksDTO = objectMapper.readValue(json, BooksDTO.class);
        return booksDTO.getResults();
    }
}
