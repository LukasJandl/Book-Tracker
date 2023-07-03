export default function FilterButton({ value, handleFilter }) {
    return (
        <>
            <button type="button" className="btn btn-dark" value={{ value }} onClick={handleFilter}>
                {value}
            </button>
        </>
    );
}
