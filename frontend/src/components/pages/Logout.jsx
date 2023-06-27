import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ setUser }) {
    const navigate = useNavigate();

    const performLogout = (setUser) => {
        localStorage.removeItem("bearerToken");
        localStorage.removeItem("user");
        setUser(null);
        setTimeout(() => navigate("/"), 1500);
    };

    useEffect(() => {
        performLogout(setUser);
    }, []);

    return <div>Performing Logout...</div>;
}
