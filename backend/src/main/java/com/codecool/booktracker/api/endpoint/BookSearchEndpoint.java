package com.codecool.booktracker.api.endpoint;

import com.codecool.booktracker.api.dto.BookDTO;
import com.codecool.booktracker.logic.BookSearchService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/search/books")
public class BookSearchEndpoint {
    private final BookSearchService bookSearchService;

    public BookSearchEndpoint(BookSearchService bookSearchService) {
        this.bookSearchService = bookSearchService;
    }

    @GetMapping("{name}")
    public List<BookDTO> getByName(@PathVariable String name) throws JsonProcessingException {
        return bookSearchService.getByName(name);
    }
}
