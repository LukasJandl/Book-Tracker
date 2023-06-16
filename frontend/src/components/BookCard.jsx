import Image from "./Image";

export default function BookCard({ book }) {
    const getImageLink = () => {
        const NO_IMAGE_URL = "/no-image-icon.png";
        if (book.volumeInfo.imageLinks == null) {
            return process.env.PUBLIC_URL + NO_IMAGE_URL;
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
        <div className="container text-center">
            <div className="card" style={{ width: "60rem" }}>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-auto">
                        {book.volumeInfo.imageLinks && <Image thumbnail={getImageLink()}/>}
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
        </div>
    );
}
