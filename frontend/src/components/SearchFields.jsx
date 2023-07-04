import { useState } from "react";

import { getBooksByTitle, getBooksByAuthor, getBooksByTitleAndAuthor } from "../functions/fetch";

export default function SearchFields({ setBooks }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleInput();
        }
    };

    const handleInput = () => {
        setBooks([]);
        if (author === "") {
            searchForBooksByTitle();
        } else if (title === "") {
            searchForBooksByAuthor();
        } else {
            searchForBooksByTitleAndAuthor();
        }
    };

    const searchForBooksByTitle = async () => {
        const response = await getBooksByTitle(title);
        if (response.status === 200) {
            setBooks(response.data);
        } else {
            alert("Something went wrong!");
        }
    };

    const searchForBooksByAuthor = async () => {
        const response = await getBooksByAuthor(author);
        if (response.status === 200) {
            setBooks(response.data);
        } else {
            alert("Something went wrong!");
        }
    };

    const searchForBooksByTitleAndAuthor = async () => {
        const response = await getBooksByTitleAndAuthor(title, author);
        if (response.status === 200) {
            setBooks(response.data);
        } else {
            alert("Something went wrong!");
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center input-group input-group-sm mb-3">
                <input
                    type="text"
                    id="TitleSearchField"
                    className="form-control ms-2 someInput"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    onKeyDown={handleKeyDown}
                    aria-label="Title"
                />
                <input
                    type="text"
                    id="AuthorSearchField"
                    className="form-control mx-2 someInput"
                    placeholder="Author"
                    value={author}
                    onChange={handleAuthorChange}
                    onKeyDown={handleKeyDown}
                    aria-label="Author"
                />
                <button className="btn btn-secondary" type="button" onClick={handleInput}>
                    Search
                </button>
            </div>
        </>
    );
}
