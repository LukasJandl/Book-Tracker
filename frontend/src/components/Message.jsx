export default function Message({ message, type }) {
    return (
        <div className={`alert alert-${type} mx-5 d-grid`} role="alert">
            {message}
        </div>
    );
}
