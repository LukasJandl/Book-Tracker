package com.codecool.booktracker.model.repositories;

import com.codecool.booktracker.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book getBookByTitle(String title);
}
