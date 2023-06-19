export default function Description({ book }) {
    return (
        <>
            <h5>Description:</h5>
            <p>{book.volumeInfo.description}</p>
        </>
    );
}
