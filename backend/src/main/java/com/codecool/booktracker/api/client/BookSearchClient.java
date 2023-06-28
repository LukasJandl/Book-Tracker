package com.codecool.booktracker.api.client;

import com.codecool.booktracker.logic.WebClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class BookSearchClient {

    private final String booksApi;
    private final String booksApiKey = "&key=AIzaSyD5u7T1SGKiRJEv0RVc6jG3jB8-xtmtOXw";
    private final WebClientService webClientService;
    private final String maxResults;

    public BookSearchClient(@Value("https://www.googleapis.com/books/v1/volumes") String booksApi, WebClientService webClientService) {
        this.booksApi = booksApi;
        this.webClientService = webClientService;
        this.maxResults = "&maxResults=10";
    }

    public String getByTitle(String title) {
        String params = "?q=intitle:" + title;
        return webClientService.get(booksApi, params, booksApiKey, maxResults);
    }

    public String getByAuthor(String author) {
        String params = "?q=inauthor:" + author;
        return webClientService.get(booksApi, params, booksApiKey, maxResults);
    }

    public String getByTitleAndAuthor(String title, String author) {
        String params = "?q=intitle:" + title + "+inauthor:" + author;
        return webClientService.get(booksApi, params, booksApiKey, maxResults);
    }
}
