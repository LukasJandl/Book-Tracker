export default function Message({ message, color }) {
    return (
        <div className={`alert alert-${color} mx-5 d-grid`} role="alert">
            {message}
        </div>
    );
}
