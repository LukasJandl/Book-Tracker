import { saveNewBook } from "../functions/fetch";

export default function SaveButtons({ book, getAuthors, getImageLink, getCategories }) {
    const saveBook = async (status) => {
        const newBook = {
            googleId: book.id,
            title: book.volumeInfo.title,
            authors: getAuthors(book),
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            description: book.volumeInfo.description,
            pageCount: book.volumeInfo.pageCount,
            categories: getCategories(book),
            averageRating: book.volumeInfo.averageRating,
            ratingsCount: book.volumeInfo.ratingsCount,
            language: book.volumeInfo.language,
            thumbnail: getImageLink(book),
            status: status,
        };

        const response = await saveNewBook(newBook);
        alert(response.data.message);
    };

    return (
        <>
            <button type="button" className="btn btn-secondary" onClick={() => saveBook("WANT_TO_READ")}>
                Want to read
            </button>
            <button type="button" className="btn btn-primary" onClick={() => saveBook("FINISHED")}>
                Finished
            </button>
        </>
    );
}
