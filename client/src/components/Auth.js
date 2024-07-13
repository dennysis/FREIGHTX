// Auth.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/login.css"; // Ensure this CSS file has the necessary styles

function Auth({ onLogin, isLogin }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [balance, setBalance] = useState("");
    const [error, setError] = useState(null);
    const [isLoginMode, setIsLoginMode] = useState(isLogin);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const url = isLoginMode ? "/login" : "/signup";
        const body = isLoginMode ? { email, password } : { username, email, password, balance };

        console.log("Sending request to:", url);
        console.log("Request body:", body);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then((text) => {
                    throw new Error(`Error: ${response.status} - ${text}`);
                });
            }
            return response.json();
        })
        .then((user) => {
            console.log("Login/Signup successful:", user);
            onLogin(user);
            history.push("/home");
        })
        .catch((err) => {
            console.error("Error:", err);
            setError(err.message);
        });
    }

    function toggleMode() {
        setIsLoginMode(!isLoginMode);
        history.push(isLoginMode ? "/signup" : "/login");
    }

    return (
        <div id="login">
            <div className="navbar">
                <img src="https://i.pinimg.com/564x/86/4a/3e/864a3e877dc16143e216b145da06a336.jpg" alt="Logo" className="logo" />
                <span className="brand-name">FREIGHTX</span>
            </div>
            <div className="circle-container">
                <div className={`circle ${isLoginMode ? "left-login" : "left-signup"}`}>
                    {isLoginMode && (
                        <form id="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button id="login-btn" type="submit">
                                Login
                            </button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </form>
                    )}
                    {!isLoginMode && <div className="left-signup-decorator"></div>}
                </div>
                <div className={`circle ${isLoginMode ? "right-login" : "right-signup"}`}>
                    {!isLoginMode && (
                        <form id="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="balance">Balance:</label>
                            <input
                                id="balance"
                                type="number"
                                name="balance"
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                            />
                            <button id="login-btn" type="submit">
                                Signup
                            </button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </form>
                    )}
                    {isLoginMode && <div className="right-login-decorator"></div>}
                </div>
            </div>
            <button id="switch-btn" onClick={toggleMode}>
                {isLoginMode ? "Switch to Signup" : "Switch to Login"}
            </button>
        </div>
    );
}

export default Auth;
