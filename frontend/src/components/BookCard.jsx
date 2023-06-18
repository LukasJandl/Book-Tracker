import { useState } from "react";
import BookModal from "./BookModal";
import Image from "./Image";

export default function BookCard({ book }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        return setShowModal(true);
    };

    const closeModal = () => {
        return setShowModal(false);
    };

    const getImageLink = () => {
        const NO_IMAGE_URL = "/image_not_available.jpg";
        if (book.volumeInfo.imageLinks == null) {
            return NO_IMAGE_URL;
        } else {
            return book.volumeInfo.imageLinks.thumbnail;
        }
    };

    const getAuthors = () => {
        const authors = book.volumeInfo.authors;
        return authors == null ? null : authors.join(", ");
    };

    const getPartialDescription = () => {
        const description = book.volumeInfo.description;
        return description == null ? null : description.substr(0, 300) + "...";
    };
    return (
        <div className="container">
            <div className="card" style={{ width: "60rem" }} onClick={openModal}>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-auto">
                        <Image thumbnail={getImageLink()} />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{getAuthors()}</h6>
                            <p className="card-text">{getPartialDescription()}</p>
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
