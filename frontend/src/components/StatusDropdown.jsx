import { updateBook } from "../functions/fetch";

export default function StatusDropdown({ book, closeModal, setResponseMessage, setMessageColor }) {
    const updateStatus = async (event) => {
        const updatedBook = book;
        updatedBook.status = event.target.innerHTML;

        const response = await updateBook(updatedBook);
        closeModal();
        window.scrollTo(0, 0);
        setResponseMessage(response.data.message);
        if (response.status === 200) {
            setMessageColor("success");
        } else {
            setMessageColor("danger");
        }
        setTimeout(() => setResponseMessage(""), 3000);
        setTimeout(() => setMessageColor(""), 3000);
    };

    return (
        <div className="dropup">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Dropdown button
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
