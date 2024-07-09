import { useState } from "react";
function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
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
return (
    <form onSubmit={handleSubmit}>
        <label>
            Username
            <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <label>
            Password
            <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <button type="submit">Login</button>
    </form>
)}
export default Login;