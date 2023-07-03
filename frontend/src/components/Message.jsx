export default function Message({ message, color }) {
    return (
        <div className={`alert alert-${color}`} role="alert">
            {message}
        </div>
    );
}
