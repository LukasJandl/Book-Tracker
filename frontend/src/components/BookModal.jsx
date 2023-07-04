import Rating from "./Rating";
import Image from "./Image";
import BookDetails from "./BookDetails";
import Description from "./Description";
import SaveButtons from "./SaveButtons";
import StatusDropdown from "./StatusDropdown";
import DeleteButton from "./DeleteButton";
import { getJoinedCategories } from "../functions/extractData";

export default function BookModal({
    closeModal,
    book,
    bookId,
    isSavedBook,
    getImageLink,
    getJoinedAuthors,
    setResponseMessage,
    setMessageColor,
}) {
    const modalStyle = {
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)",
    };

    const handleResponse = (response) => {
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
        <div className="modal show fade" style={modalStyle} tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {book.title}
                            <div>
                                <i className="card-subtitle text-body-secondary small">
                                    {(isSavedBook && book.authors) || getJoinedAuthors(book.authors)}
                                </i>
                            </div>
                        </h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <Image thumbnail={(isSavedBook && book.thumbnail) || getImageLink(book)} />
                        <Rating book={book} />
                        <BookDetails book={book} isSavedBook={isSavedBook} getJoinedCategories={getJoinedCategories} />
                        <Description bookDescription={book.description} />
                    </div>
                    <div className="modal-footer">
                        {(isSavedBook && (
                            <>
                                {console.log(book)}
                                <DeleteButton book={book} handleResponse={handleResponse} />
                                <StatusDropdown book={book} handleResponse={handleResponse} />
                            </>
                        )) || (
                            <SaveButtons
                                book={book}
                                bookId={bookId}
                                getJoinedAuthors={getJoinedAuthors}
                                getImageLink={getImageLink}
                                getJoinedCategories={getJoinedCategories}
                                handleResponse={handleResponse}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
