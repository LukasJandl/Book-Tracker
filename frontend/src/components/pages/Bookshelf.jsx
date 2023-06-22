import { useEffect, useState } from "react";
import { getAllBooks } from "../../functions/fetch";

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

    return <div>{books.length !== null && books.map((book) => <div key={book.id}>{book.title}</div>)}</div>;
}
