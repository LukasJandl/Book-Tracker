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
        <form>
            <div className="input-group input-group-sm my-3">
                <input
                    type="text"
                    id="TitleSearchField"
                    className="form-control someInput"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    onKeyDown={handleKeyDown}
                    aria-label="Title"
                />
            </div>
            <div className="input-group input-group-sm mb-3">
                <input
                    type="text"
                    id="AuthorSearchField"
                    className="form-control someInput"
                    placeholder="Author"
                    value={author}
                    onChange={handleAuthorChange}
                    onKeyDown={handleKeyDown}
                    aria-label="Author"
                />
            </div>
        </form>
    );
}
