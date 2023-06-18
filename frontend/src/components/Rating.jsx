export default function Rating({ book }) {
    return (
        <div className="d-flex justify-content-center">
            <p className="reviews">
                Rating: {book.volumeInfo.averageRating}/5 with {book.volumeInfo.ratingsCount} Reviews
            </p>
        </div>
    );
}
