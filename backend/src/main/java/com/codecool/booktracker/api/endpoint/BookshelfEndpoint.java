package com.codecool.booktracker.api.endpoint;

import com.codecool.booktracker.logic.BookshelfService;
import com.codecool.booktracker.model.Book;
import com.codecool.booktracker.model.response.ResponseMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/bookshelf")
public class BookshelfEndpoint {
    private final BookshelfService bookshelfService;

    public BookshelfEndpoint(BookshelfService bookshelfService) {
        this.bookshelfService = bookshelfService;
    }

    @GetMapping("/all/{username}")
    public List<Book> getBooks(@PathVariable String username) {
        return bookshelfService.getAllBooks(username);
    }

    @PostMapping("/{username}")
    public ResponseEntity<ResponseMessage> saveBook(@PathVariable String username, @RequestBody Book book) {
        return bookshelfService.saveBook(username, book);
    }

    @PutMapping("/{username}")
    public ResponseEntity<ResponseMessage> updateBook(@PathVariable String username, @RequestBody Book updatedBook) {
        return bookshelfService.updateBookByName(username, updatedBook);
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<ResponseMessage> deleteBook(@PathVariable String username, @RequestBody Book book) {
        return bookshelfService.deleteBookById(username, book.getId());
    }
}
