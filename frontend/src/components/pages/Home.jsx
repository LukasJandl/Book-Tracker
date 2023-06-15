import { useState } from "react"
import { getBooks } from "../../functions/fetch"

import BooksCard from "../BooksCard"

export default function Home() {

    const [searchParam, setSearchParam] = useState("")
    const [books, setBooks] = useState([])

    const handleChange = (event) => {
        setSearchParam(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchForBooks()
        }
    }

    const searchForBooks = async () => {
        const response = await getBooks(searchParam)
        setBooks(response.data)
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    id="TitleSearchField"
                    value={searchParam}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                {books.length > 0 && <input
                    type="text"
                    id="AuthorSearchField"
                    value={books[0].volumeInfo.title}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />}
            </div>
            <div>
                <BooksCard books={books} />
            </div>
        </>
    );
}