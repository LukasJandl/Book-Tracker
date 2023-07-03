import FilterButton from "./FilterButton";

export default function FilterCard({ books, setDisplayedBooks }) {
    const handleFilter = (event) => {
        const bookCategory = [];
        books.map((book) => {
            if (book.status === event.target.innerHTML) {
                bookCategory.push(book);
            }
        });
        setDisplayedBooks(bookCategory);
    };

    return (
        <div className="mb-3 btn-group" role="toolbar" aria-label="Filter buttons">
            <FilterButton value={"WANT_TO_READ"} handleFilter={handleFilter} />
            <FilterButton value={"CURRENTLY_READING"} handleFilter={handleFilter} />
            <FilterButton value={"FINISHED"} handleFilter={handleFilter} />
        </div>
    );
}
