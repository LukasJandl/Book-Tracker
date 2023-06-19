import Rating from "./Rating";
import Image from "./Image";
import BookDetails from "./BookDetails";
import Description from "./Description";
import SaveButtons from "./SaveButtons";

export default function BookModal({ closeModal, getImageLink, getAuthors, book }) {
    const modalStyle = {
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)",
    };

    return (
        <div className="modal show fade" style={modalStyle} tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {book.volumeInfo.title}
                            <h6 className="card-subtitle text-body-secondary">{getAuthors()}</h6>
                        </h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <Image thumbnail={getImageLink()} />
                        <Rating book={book} />
                        <BookDetails book={book} />
                        <Description book={book} />
                    </div>
                    <div className="modal-footer">
                        <SaveButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}
