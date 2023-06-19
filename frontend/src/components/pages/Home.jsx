import { useState } from "react";

import BooksCard from "../BooksCard";
import SearchFields from "../SearchFields";

export default function Home() {
    const [books, setBooks] = useState([]);

    return (
        <>
            <div>
                <SearchFields setBooks={setBooks} />
            </div>
            <div>
                <BooksCard books={books} />
            </div>
        </>
    );
}
