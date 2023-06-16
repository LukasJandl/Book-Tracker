import Book from "./BookCard";

export default function BooksCard({ books }) {
    return (
        <>
            {books.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </>
    );
}
