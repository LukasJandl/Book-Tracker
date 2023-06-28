import { useState } from "react";

import BookModal from "./BookModal";
import Image from "./Image";
import { getImageLink, getAuthors, getPartialDescription } from "../functions/extractData";

export default function BookCard({ book }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        return setShowModal(true);
    };

    const closeModal = () => {
        return setShowModal(false);
    };

    return (
        <div className="container">
            <div className="card" style={{ width: "60rem" }} onClick={openModal}>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-auto">
                        <Image thumbnail={getImageLink(book)} />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{getAuthors(book)}</h6>
                            <p className="card-text">
                                {book.id}
                                {getPartialDescription(book)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <BookModal closeModal={closeModal} getImageLink={getImageLink} getAuthors={getAuthors} book={book} />
            )}
        </div>
    );
}
