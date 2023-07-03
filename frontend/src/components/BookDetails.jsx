export default function BookDetails({ book, isSavedBook, getJoinedCategories }) {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="row">
                    <p>Publisher: {book.publisher}</p>
                    <p>First release: {book.publishedDate}</p>
                </div>
                <div className="row">
                    <p>Language: {book.language}</p>
                    <p>Page count: {book.pageCount}</p>
                </div>
            </div>
            <p>Category:{(isSavedBook && book.categories) || getJoinedCategories(book.categories)}</p>
        </>
    );
}
