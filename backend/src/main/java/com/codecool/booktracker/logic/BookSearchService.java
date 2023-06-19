package com.codecool.booktracker.logic;

import com.codecool.booktracker.api.client.BookSearchClient;
import com.codecool.booktracker.api.dto.BookDTO;
import com.codecool.booktracker.api.dto.BooksDTO;
import com.codecool.booktracker.api.dto.SearchParamsDTO;
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

    public List<BookDTO> getByTitle(String title) throws JsonProcessingException {
        String json = bookSearchClient.getByTitle(title);
        BooksDTO booksDTO = objectMapper.readValue(json, BooksDTO.class);
        return booksDTO.getResults();
    }
    public List<BookDTO> getByAuthor(String author) throws JsonProcessingException {
        String json = bookSearchClient.getByAuthor(author);
        BooksDTO booksDTO = objectMapper.readValue(json, BooksDTO.class);
        return booksDTO.getResults();
    }

    public List<BookDTO> getByTitleAndAuthor(String title, String author) throws JsonProcessingException {
        String json = bookSearchClient.getByTitleAndAuthor(title, author);
        BooksDTO booksDTO = objectMapper.readValue(json, BooksDTO.class);
        return booksDTO.getResults();
    }
}
