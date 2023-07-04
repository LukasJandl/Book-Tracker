import { updateBook } from "../functions/fetch";

export default function StatusDropdown({ book, handleResponse }) {
    const updateStatus = async (event) => {
        const updatedBook = book;
        updatedBook.status = event.target.innerHTML;

        const response = await updateBook(updatedBook);
        handleResponse(response);
    };

    return (
        <div className="dropup">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Reading Status
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" onClick={updateStatus}>
                        WANT_TO_READ
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={updateStatus}>
                        CURRENTLY_READING
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={updateStatus}>
                        FINISHED
                    </a>
                </li>
            </ul>
        </div>
    );
}
