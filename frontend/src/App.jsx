import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Bookshelf from "./components/pages/Bookshelf";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Logout from "./components/pages/Logout";
import "./App.css";

export default function App() {
    const [user, setUser] = useState(localStorage.getItem("user"));

    return (
        <>
            <Navbar user={user} />
            <Routes>
                <Route path={"/"} exact element={<Home />} />
                <Route path={"/bookshelf"} element={<Bookshelf user={user} />} />
                <Route path={"/logout"} element={<Logout setUser={setUser} />} />
                <Route path={"/signUp"} element={<SignUp />} />
                <Route path={"/signIn"} element={<SignIn setUser={setUser} />} />
            </Routes>
        </>
    );
}
