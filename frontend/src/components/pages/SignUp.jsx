import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../functions/fetch";
import Message from "../Message";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        const userData = {
            email: email,
            username: username,
            password: password,
        };
        const response = await registerUser(userData);
        setResponseMessage(response.data.message);

        if (response.status === 200) {
            setMessageColor("success");
            setTimeout(() => navigate("/"), 1500);
        } else {
            setMessageColor("danger");
        }
    };

    return (
        <div className="container">
            <div className="form-outline input-group d-flex justify-content-center my-4">
                <input
                    type="email"
                    id="emailInpuField"
                    className="form-control someInput"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="form-outline input-group d-flex justify-content-center mb-4">
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
            <button type="button" className="btn btn-primary d-grid gap-2 col-2 mb-4 mx-auto" onClick={handleRegister}>
                Register
            </button>
            <div className="text-center">
                <p>
                    Already a member?&nbsp;
                    <NavLink to="/SignIn">Login</NavLink>
                </p>
            </div>
            {responseMessage !== "" && <Message message={responseMessage} color={messageColor} />}
        </div>
    );
}
