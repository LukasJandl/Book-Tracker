import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import { authenticateUser } from "../../functions/fetch";

export default function SignIn({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [responseMessage, setResponsemessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        const token = `${username}:${password}`;
        const encodedToken = Buffer.from(token).toString("base64");
        const response = await authenticateUser(encodedToken);

        if (response.status === 200) {
            localStorage.setItem("bearerToken", response.data);
            localStorage.setItem("user", username);
            setUser(username);
            setResponsemessage("Login successful!");
            console.log(response.data);
            setTimeout(() => navigate("/"), 1500);
        } else {
            setResponsemessage("Login failed!");
        }
    };

    return (
        <>
            <div className="form-outline input-group d-flex justify-content-center my-4">
                <input
                    type="username"
                    id="usernameInpuField"
                    className="someInput"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="form-outline input-group d-flex justify-content-center mb-4">
                <input
                    type="password"
                    id="passwordInpuField"
                    className="someInput"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            {/* <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="rememberMe" checked />
                        <label className="form-check-label" htmlFor="rememberMe">
                            {" "}
                            Remember me{" "}
                        </label>
                    </div>
                </div>

                <div className="col">
                    <a href="#!">Forgot password?</a>
                </div>
            </div> */}

            <button type="button" className="btn btn-primary d-grid gap-2 col-3 mb-4 mx-auto" onClick={handleLogin}>
                Login
            </button>

            <div className="text-center">
                <p>
                    Not a member?&nbsp;
                    <NavLink to="/SignUp">Register</NavLink>
                </p>
            </div>
            <div>{responseMessage}</div>
        </>
    );
}
