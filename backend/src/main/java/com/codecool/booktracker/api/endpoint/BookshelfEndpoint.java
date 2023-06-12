package com.codecool.booktracker.api.endpoint;

import com.codecool.booktracker.exceptions.BookAlreadyExistsException;
import com.codecool.booktracker.logic.BookService;
import com.codecool.booktracker.model.Book;
import org.hibernate.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookshelfEndpoint {
    private final BookService bookService;

    public BookshelfEndpoint(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/all")
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{name}")
    public Book getBook(@PathVariable String name) {
        return bookService.getBook(name);
    }

    @PostMapping
    public ResponseEntity<String> saveBook(@RequestBody Book book) {
        try {
            bookService.saveBook(book);
            return new ResponseEntity<>("Successfully saved book", HttpStatus.OK);
        } catch (BookAlreadyExistsException exception) {
            return new ResponseEntity<>(exception.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PutMapping("/{name}")
    public ResponseEntity<String> updateBook(@PathVariable String name, @RequestBody Book updatedBook) {
        try {
            bookService.updateBookByName(name, updatedBook);
            return new ResponseEntity<>("Successfully updated book", HttpStatus.OK);
        } catch (ObjectNotFoundException exception) {
            return new ResponseEntity<>("Could not find the Book: " + name, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<String> deleteBook(@PathVariable String name) {
        try {
            bookService.deleteBookByName(name);
            return new ResponseEntity<>("Successfully deleted book", HttpStatus.OK);
        } catch (ObjectNotFoundException exception) {
            return new ResponseEntity<>("Could not find the Book: " + name, HttpStatus.NOT_FOUND);
        }
    }
}
