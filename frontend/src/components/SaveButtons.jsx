import { saveNewBook } from "../functions/fetch";

export default function SaveButtons({
    book,
    bookId,
    getJoinedAuthors,
    getImageLink,
    getJoinedCategories,
    closeModal,
    setResponseMessage,
    setMessageColor,
}) {
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
        closeModal();
        window.scrollTo(0, 0);
        setResponseMessage(response.data.message);
        if (response.status === 200) {
            setMessageColor("success");
        } else {
            setMessageColor("danger");
        }
        setTimeout(() => setResponseMessage(""), 4000);
        setTimeout(() => setMessageColor(""), 4000);
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
