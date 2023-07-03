package com.codecool.booktracker.logic;

import com.codecool.booktracker.model.Book;
import com.codecool.booktracker.model.User;
import com.codecool.booktracker.model.repositories.BookRepository;
import com.codecool.booktracker.model.repositories.UserRepository;
import com.codecool.booktracker.model.response.ResponseMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookshelfService {
    private final BookRepository bookRepository;
    private final UserRepository userRepository;

    public BookshelfService(BookRepository bookRepository, UserRepository userRepository) {
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
    }

    public List<Book> getAllBooks(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.get().getBooks();
    }

    public Book getBook(String id) {
        return bookRepository.getBookById(id);
    }

    public ResponseEntity<ResponseMessage> saveBook(String username, Book newBook) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body(new ResponseMessage("The user " + username + " doesn't seem to exist!"));
        }
        if (bookAlreadyExists(user, newBook)) {
            return ResponseEntity.badRequest().body(new ResponseMessage(newBook.getTitle() + " is already saved!"));
        }
        user.get().getBooks().add(newBook);
        bookRepository.save(newBook);
        userRepository.save(user.get());
        return ResponseEntity.ok(new ResponseMessage("Successfully saved " + newBook.getTitle() + " as " + newBook.getStatus()));
    }

    private boolean bookAlreadyExists(Optional<User> user, Book newBook) {
        return user.get().getBooks().stream().
                anyMatch(book -> book.getGoogleId().equals(newBook.getGoogleId()));
    }

    public ResponseEntity<ResponseMessage> updateBookByName(String username, String id, Book updatedBook) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body(new ResponseMessage("The user " + username + " doesn't seem to exist!"));
        }
        Book book = bookRepository.getBookById(id);
        if (book == null) {
            return ResponseEntity.badRequest().body(new ResponseMessage("Could not find " + updatedBook.getTitle()));
        }
        book.setStatus(updatedBook.getStatus());
        bookRepository.save(book);
        return ResponseEntity.ok(new ResponseMessage("Successfully updated " + updatedBook.getTitle() + " to " + updatedBook.getStatus()));
    }

    public ResponseEntity<ResponseMessage> deleteBookById(String username, String id) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body(new ResponseMessage("The user " + username + " doesn't seem to exist!"));
        }
        Book book = bookRepository.getBookById(id);
        if (book == null) {
            return ResponseEntity.badRequest().body(new ResponseMessage("Could not find book!"));
        }
        bookRepository.delete(book);
        return ResponseEntity.ok(new ResponseMessage("Successfully deleted book!"));
    }
}
