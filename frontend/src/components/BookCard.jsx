import { useEffect, useState } from "react";

import BookModal from "./BookModal";
import Image from "./Image";
import { getImageLink, getJoinedAuthors, getPartialDescription } from "../functions/extractData";

export default function BookCard({ book, bookId, isSavedBook }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        return setShowModal(true);
    };

    const closeModal = () => {
        return setShowModal(false);
    };

    return (
        <>
            <div className="card" onClick={openModal}>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-auto">
                        <Image thumbnail={(isSavedBook && book.thumbnail) || getImageLink(book)} />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                {(isSavedBook && book.authors) || getJoinedAuthors(book.authors)}
                            </h6>
                            <p className="card-text">{getPartialDescription(book.description)}</p>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <BookModal
                    closeModal={closeModal}
                    book={book}
                    bookId={bookId}
                    isSavedBook={isSavedBook}
                    getImageLink={getImageLink}
                    getJoinedAuthors={getJoinedAuthors}
                />
            )}
        </>
    );
}
