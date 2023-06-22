import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Bookshelf from "./components/pages/Bookshelf";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} exact element={<Home />} />
                <Route path={"/Bookshelf"} element={<Bookshelf />} />
                <Route path={"/SignUp"} element={<SignUp />} />
                <Route path={"/SignIn"} element={<SignIn />} />
            </Routes>
        </>
    );
}
