import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/login.css";

function Auth({ onLogin, isLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoginMode, setIsLoginMode] = useState(isLogin); // Use a new state variable for toggling login/signup
    const history = useHistory(); // Hook to navigate programmatically

    function handleSubmit(e) {
        e.preventDefault();
        const url = isLoginMode ? "/login" : "/signup";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setError(err.error));
            }
        });
    }

    function toggleMode() {
        setIsLoginMode(!isLoginMode);
        history.push(isLoginMode ? "/signup" : "/login"); // Navigate to the new path
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
                            <label htmlFor="username">Username:</label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                    {!isLoginMode && <p id="p">Register details</p>}
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
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button id="login-btn" type="submit">
                                Signup
                            </button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                        </form>
                    )}
                    {isLoginMode && <p id="p">Login details</p>}
                </div>
            </div>
            <button id="switch-btn" onClick={toggleMode}>
                {isLoginMode ? "Switch to Signup" : "Switch to Login"}
            </button>
        </div>
    );
}

export default Auth;
