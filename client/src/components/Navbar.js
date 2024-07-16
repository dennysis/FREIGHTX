import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar({ user }) {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to={user ? "/home" : "/login"} className="navbar-logo">
                    <img src="https://i.pinimg.com/564x/86/4a/3e/864a3e877dc16143e216b145da06a336.jpg" alt="company logo" id="company-logo" />
                    <span id="company-name">FREIGHTX</span>
                </Link>
            </div>
            {user && (
                <div className="navbar-right">
                    <Link id="port-link" to="/port" className="navbar-link">PORTS</Link>
                    <Link to="/user" className="navbar-link">
                        <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="user logo" id="user-logo" />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
