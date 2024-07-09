import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"; 
function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/home" className="navbar-logo">
                    <img src="https://i.pinimg.com/564x/86/4a/3e/864a3e877dc16143e216b145da06a336.jpg" alt="company logo" id="company-logo" />
                    <span id="company-name">FREIGHTX</span>
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="/cargo" className="navbar-link">CARGO</Link>
                <Link to="/passenger" className="navbar-link">PASSENGER</Link>
            </div>
            <div className="navbar-right">
                <Link to="/user" className="navbar-link">
                    <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="user logo" id="user-logo" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
