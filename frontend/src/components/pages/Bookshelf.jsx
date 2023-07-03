import { useEffect, useState } from "react";
import { getAllBooks } from "../../functions/fetch";
import BookCard from "../BookCard";

export default function Bookshelf() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getSavedBooks();
    }, []);

    const getSavedBooks = async () => {
        const response = await getAllBooks();
        if (response.status === 200) {
            setBooks(response.data);
        } else {
            alert("something went wrong");
        }
    };

    return (
        <div>
            {books.length !== null &&
                books.map((book) => <BookCard key={book.id} book={book} bookId={book.id} isSavedBook={true} />)}
        </div>
    );
}
