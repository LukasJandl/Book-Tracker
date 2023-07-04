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
        displayActiveButton(event);
    };

    const displayActiveButton = (event) => {
        const buttons = document.querySelector("button.active");
        if (buttons !== null) buttons.classList.remove("active");
        event.target.classList.add("active");
    };

    return (
        <div
            id="filter-card"
            className="d-flex justify-content-center mx-5 mb-3 btn-group filter"
            role="toolbar"
            aria-label="Filter buttons"
        >
            <FilterButton value={"WANT_TO_READ"} handleFilter={handleFilter} />
            <FilterButton value={"CURRENTLY_READING"} handleFilter={handleFilter} />
            <FilterButton value={"FINISHED"} handleFilter={handleFilter} />
        </div>
    );
}
