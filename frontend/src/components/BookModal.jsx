export default function BookModal({ closeModal, getImageLink, getAuthors, book }) {
    const modalStyle = {
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)",
    };

    document.onkeydown = (event) => {
        if (event.code === "Escape") {
            closeModal();
        }
    };

    return (
        <div className="modal show fade" style={modalStyle} tabIndex="-1">
            {console.log("rendered modal component")}
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{book.volumeInfo.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{getAuthors()}</h6>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="text-center">
                            <img src={getImageLink()} alt="" />
                        </div>
                        <p>{book.volumeInfo.description}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
