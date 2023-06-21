package com.codecool.booktracker.logic;

import com.codecool.booktracker.exceptions.BookAlreadyExistsException;
import com.codecool.booktracker.model.Book;
import com.codecool.booktracker.model.repositories.BookRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookshelfService {
    private final BookRepository bookRepository;

    public BookshelfService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBook(String id) {
        return bookRepository.getBookByGoogleId(id);
    }

    public void saveBook(Book newBook) {
        Book book = bookRepository.getBookByGoogleId(newBook.getGoogleId());
        if (book == null) {
            newBook.setDescription(newBook.getDescription().substring(0, 255));
            bookRepository.save(newBook);
        } else {
            throw new BookAlreadyExistsException("The Book: " + newBook.getTitle() + " is already saved");
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
