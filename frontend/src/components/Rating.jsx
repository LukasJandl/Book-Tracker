export default function Rating({ book }) {
    return (
        <div className="d-flex justify-content-center">
            <p className="reviews">
                Rating: {book.averageRating}/5 with {book.ratingsCount} Reviews
            </p>
        </div>
    );
}
