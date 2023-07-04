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

    public ResponseEntity<ResponseMessage> updateBookByName(String username, Book updatedBook) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body(new ResponseMessage("The user " + username + " doesn't seem to exist!"));
        }
        Book book = bookRepository.getBookById(updatedBook.getId());
        if (book == null) {
            return ResponseEntity.badRequest().body(new ResponseMessage("Could not find " + updatedBook.getTitle()));
        }
        book.setStatus(updatedBook.getStatus());
        bookRepository.save(book);
        return ResponseEntity.ok(new ResponseMessage("Successfully updated " + updatedBook.getTitle() + " to " + updatedBook.getStatus()));
    }

    public ResponseEntity<ResponseMessage> deleteBookById(String username, long id) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            return ResponseEntity.badRequest().body(new ResponseMessage("The user " + username + " doesn't seem to exist!"));
        }
        Optional<Book> book = user.get().getBooks().stream()
                .filter(b -> b.getId() == id).findFirst();
        if (book.isEmpty()) {
            return ResponseEntity.badRequest().body(new ResponseMessage("Could not find book!"));
        }
        user.get().getBooks().removeIf(b -> b.getId() == id);
        bookRepository.deleteById(id);
        return ResponseEntity.ok(new ResponseMessage("Successfully deleted book!"));
    }
}
