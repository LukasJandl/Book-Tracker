import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Bookshelf from "./components/pages/Bookshelf";
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} exact element={<Home />} />
                <Route path={"/Bookshelf"} element={<Bookshelf />} />
            </Routes>
        </>
    );
}
