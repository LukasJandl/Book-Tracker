import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ setUser }) {
    const navigate = useNavigate();

    const performLogout = (setUser) => {
        localStorage.removeItem("bearerToken");
        localStorage.removeItem("user");
        setTimeout(() => setUser(null), 1500);
        setTimeout(() => navigate("/"), 1500);
    };

    useEffect(() => {
        performLogout(setUser);
    }, []);

    return (
        <div className="container" style={{ width: "60rem" }}>
            Performing Logout...
        </div>
    );
}
