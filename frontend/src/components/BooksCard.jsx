import Book from "./BookCard";

export default function BooksCard({ books }) {
    return (
        <div className="card-body">
            {books.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </div>
    );
}
