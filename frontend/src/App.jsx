import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Bookshelf from "./components/pages/Bookshelf";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Logout from "./components/pages/Logout";
import "./App.css";
import { useState } from "react";

export default function App() {
    const [user, setUser] = useState(localStorage.getItem("user"));

    return (
        <>
            <Navbar user={user} />
            <Routes>
                <Route path={"/"} exact element={<Home />} />
                <Route path={"/bookshelf"} element={<Bookshelf />} />
                <Route path={"/signUp"} element={<SignUp />} />
                <Route path={"/signIn"} element={<SignIn setUser={setUser} />} />
                <Route path={"/logout"} element={<Logout setUser={setUser} />} />
            </Routes>
        </>
    );
}
