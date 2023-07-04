import { deleteBook } from "../functions/fetch";

export default function DeleteButton({ book, handleResponse }) {
    const handleClick = async () => {
        const response = await deleteBook(book);
        handleResponse(response);
    };

    return (
        <button type="button" className="btn btn-danger" onClick={handleClick}>
            Delete Book
        </button>
    );
}
