import BookCard from "./BookCard";

export default function BooksCard({ books }) {
    return (
        <div>
            {books.map((book) => (
                <BookCard key={book.id} book={book.volumeInfo} bookId={book.id} />
            ))}
        </div>
    );
}
