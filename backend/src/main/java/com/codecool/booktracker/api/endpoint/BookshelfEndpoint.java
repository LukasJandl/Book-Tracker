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

    @GetMapping("/{title}")
    public Book getBook(@PathVariable String title) {
        return bookshelfService.getBook(title);
    }

    @PostMapping("/{username}")
    public ResponseEntity<ResponseMessage> saveBook(@PathVariable String username, @RequestBody Book book) {
        return bookshelfService.saveBook(username, book);
    }

    @PutMapping("/{username}/{title}")
    public ResponseEntity<ResponseMessage> updateBook(@PathVariable String username, @PathVariable String title, @RequestBody Book updatedBook) {
        return bookshelfService.updateBookByName(username, title, updatedBook);
    }

    @DeleteMapping("/{username}/{id}")
    public ResponseEntity<ResponseMessage> deleteBook(@PathVariable String username, @PathVariable String id) {
        return bookshelfService.deleteBookById(username, id);
    }
}
