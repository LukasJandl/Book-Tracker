import { saveNewBook } from "../functions/fetch";
import { getJoinedCategories, getImageLink, getJoinedAuthors } from "../functions/extractData";

export default function SaveButtons({ book, bookId, handleResponse }) {
    const saveBook = async (status) => {
        const newBook = {
            googleId: bookId,
            title: book.title,
            authors: getJoinedAuthors(book.authors),
            publisher: book.publisher,
            publishedDate: book.publishedDate,
            description: book.description,
            pageCount: book.pageCount,
            categories: getJoinedCategories(book.categories),
            averageRating: book.averageRating,
            ratingsCount: book.ratingsCount,
            language: book.language,
            thumbnail: getImageLink(book),
            status: status,
        };

        const response = await saveNewBook(newBook);
        handleResponse(response);
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
