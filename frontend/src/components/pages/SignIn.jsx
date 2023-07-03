import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import { authenticateUser } from "../../functions/fetch";
import Message from "../Message";

export default function SignIn({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponsemessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        const token = `${username}:${password}`;
        const encodedToken = Buffer.from(token).toString("base64");
        const response = await authenticateUser(encodedToken);

        if (response.status === 200) {
            localStorage.setItem("bearerToken", response.data);
            localStorage.setItem("user", username);
            setResponsemessage("Login successful!");
            setMessageColor("success");
            setTimeout(() => navigate("/"), 1500);
            setTimeout(() => setUser(username), 1500);
        } else {
            setResponsemessage("Login failed!");
            setMessageColor("danger");
        }
    };

    return (
        <div className="container" style={{ width: "21rem" }}>
            <div className="form-outline input-group d-flex justify-content-center my-4">
                <input
                    type="username"
                    id="usernameInpuField"
                    className="form-control someInput"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="form-outline input-group d-flex justify-content-center mb-4">
                <input
                    type="password"
                    id="passwordInpuField"
                    className="form-control someInput"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <button type="button" className="btn btn-primary d-grid col-12 mb-4 mx-auto" onClick={handleLogin}>
                Login
            </button>

            <div className="text-center">
                <p>
                    Not a member?&nbsp;
                    <NavLink to="/SignUp">Register</NavLink>
                </p>
            </div>
            {responseMessage !== "" && <Message message={responseMessage} color={messageColor} />}
        </div>
    );
}
