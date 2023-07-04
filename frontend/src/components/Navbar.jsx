import { NavLink } from "react-router-dom";

export default function Navbar({ user }) {
    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark mb-3">
            <div className="container-fluid mx-3">
                <NavLink className="navbar-brand" to={"/"}>
                    BookTracker
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ color: "white" }}>
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        {user !== null && (
                            <NavLink className="nav-link" to="/Bookshelf">
                                Bookshelf
                            </NavLink>
                        )}

                        {(user === null && (
                            <>
                                <NavLink className="nav-link" to="/SignUp">
                                    Register
                                </NavLink>
                                <NavLink className="nav-link" to="/SignIn">
                                    Login
                                </NavLink>
                            </>
                        )) || (
                            <>
                                <NavLink className="nav-link" to="/Logout">
                                    Logout
                                </NavLink>

                                <i className="username">Logged in as {localStorage.getItem("user")}</i>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
