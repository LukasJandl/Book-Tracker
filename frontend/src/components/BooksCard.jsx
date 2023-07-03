import { useState } from "react";
import BookCard from "./BookCard";
import Message from "./Message";

export default function BooksCard({ books, isSavedBooks = false }) {
    const [responseMessage, setResponseMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");
    return (
        <>
            <Message message={responseMessage} color={messageColor} />
            {books.map(
                (book) =>
                    (isSavedBooks && (
                        <BookCard
                            key={book.id}
                            bookId={book.id}
                            book={book}
                            isSavedBook={isSavedBooks}
                            setResponseMessage={setResponseMessage}
                            setMessageColor={setMessageColor}
                        />
                    )) || (
                        <BookCard
                            key={book.id}
                            bookId={book.id}
                            book={book.volumeInfo}
                            isSavedBook={isSavedBooks}
                            setResponseMessage={setResponseMessage}
                            setMessageColor={setMessageColor}
                        />
                    )
            )}
        </>
    );
}
