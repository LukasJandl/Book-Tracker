import BookCard from "./BookCard";

export default function BooksCard({ books, isSavedBooks = false }) {
    return (
        <div>
            {books.map(
                (book) =>
                    (isSavedBooks && (
                        <BookCard key={book.id} bookId={book.id} book={book} isSavedBook={isSavedBooks} />
                    )) || <BookCard key={book.id} bookId={book.id} book={book.volumeInfo} isSavedBook={isSavedBooks} />
            )}
        </div>
    );
}
