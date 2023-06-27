package com.codecool.booktracker.api.endpoint;

import com.codecool.booktracker.api.dto.BookDTO;
import com.codecool.booktracker.logic.BookSearchService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/search/books")
public class BookSearchEndpoint {
    private final BookSearchService bookSearchService;

    public BookSearchEndpoint(BookSearchService bookSearchService) {
        this.bookSearchService = bookSearchService;
    }

    @GetMapping("/title/{title}")
    public List<BookDTO> getByTitle(@PathVariable String title) throws JsonProcessingException {
        return bookSearchService.getByTitle(title);
    }

    @GetMapping("/author/{author}")
    public List<BookDTO> getByAuthor(@PathVariable String author) throws JsonProcessingException {
        return bookSearchService.getByAuthor(author);
    }

    @GetMapping("/title/{title}/author/{author}")
    public List<BookDTO> getByTitleAndAuthor(@PathVariable String title, @PathVariable String author) throws JsonProcessingException {
        return bookSearchService.getByTitleAndAuthor(title, author);
    }
}
