import { useEffect, useState } from "react";
import { getAllBooks } from "../../functions/fetch";
import BooksCard from "../BooksCard";
import FilterCard from "../FilterCard";

export default function Bookshelf() {
    const [books, setBooks] = useState([]);
    const [displayedBooks, setDisplayedBooks] = useState([]);

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
        <div className="container" style={{ width: "60rem" }}>
            <FilterCard books={books} setDisplayedBooks={setDisplayedBooks} />
            <BooksCard books={displayedBooks} isSavedBooks={true} />
        </div>
    );
}
