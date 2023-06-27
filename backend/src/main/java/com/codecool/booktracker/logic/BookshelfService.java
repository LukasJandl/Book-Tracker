package com.codecool.booktracker.logic;

import com.codecool.booktracker.exceptions.BookAlreadyExistsException;
import com.codecool.booktracker.model.Book;
import com.codecool.booktracker.model.User;
import com.codecool.booktracker.model.repositories.BookRepository;
import com.codecool.booktracker.model.repositories.UserRepository;
import org.hibernate.ObjectNotFoundException;
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
        return user.map(User::getBooks).orElse(null);
    }

    public Book getBook(String id) {
        return bookRepository.getBookByGoogleId(id);
    }

    public void saveBook(String username, Book newBook) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            boolean alreadyExists =
                    user.get().getBooks().stream().
                            anyMatch(book -> book.getGoogleId() == newBook.getGoogleId());
            if (alreadyExists) {
                throw new BookAlreadyExistsException("The Book: " + newBook.getTitle() + " is already saved");
            }
            newBook.setDescription(newBook.getDescription().substring(0, 255));
            user.get().getBooks().add(newBook);
            bookRepository.save(newBook);
            userRepository.save(user.get());
        }
    }

    public void updateBookByName(String id, Book updatedBook) {
        Book book = bookRepository.getBookByGoogleId(id);
        if (book != null) {
            book.setStatus(updatedBook.getStatus());
            bookRepository.save(book);
        } else {
            throw new ObjectNotFoundException(Book.class, "Book");
        }
    }

    public void deleteBookByName(String id) {
        Book book = bookRepository.getBookByGoogleId(id);
        if (book != null) {
            bookRepository.delete(book);
        } else {
            throw new ObjectNotFoundException(Book.class, "Book");
        }
    }
}
