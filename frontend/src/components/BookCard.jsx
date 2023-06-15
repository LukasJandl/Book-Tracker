export default function BookCard({ book }) {
    return (
        <div>
            <b>{book.volumeInfo.title}</b>
        </div>
    );
}
