export default function BookDetails({ book }) {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="row">
                    <p>Publisher: {book.volumeInfo.publisher}</p>
                    <p>First release: {book.volumeInfo.publishedDate}</p>
                </div>
                <div className="row">
                    <p>Language: {book.volumeInfo.language}</p>
                    <p>Page count: {book.volumeInfo.pageCount}</p>
                </div>
            </div>
            <p>Category: {book.volumeInfo.categories}</p>
        </>
    );
}
