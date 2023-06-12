package com.codecool.booktracker.logic;

import com.codecool.booktracker.exceptions.BookAlreadyExistsException;
import com.codecool.booktracker.model.Book;
import com.codecool.booktracker.model.repositories.BookRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBook(String name) {
        return bookRepository.getBookByName(name);
    }

    public void saveBook(Book newBook) {
        Book book = bookRepository.getBookByName(newBook.getName());
        if (book == null) {
            bookRepository.save(newBook);
        } else {
            throw new BookAlreadyExistsException("The Book: " + newBook.getName() + " is already saved");
        }
    }

    public void updateBookByName(String name, Book updatedBook) {
        Book book = bookRepository.getBookByName(name);
        if (book != null) {
            book.setStatus(updatedBook.getStatus());
            book.setRating(updatedBook.getRating());
            bookRepository.save(book);
        } else {
            throw new ObjectNotFoundException(Book.class, "Book");
        }
    }

    public void deleteBookByName(String name) {
        Book book = bookRepository.getBookByName(name);
        if (book != null) {
            bookRepository.delete(book);
        } else {
            throw new ObjectNotFoundException(Book.class, "Book");
        }
    }
}
