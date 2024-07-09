import React from "react";
import "../css/footer.css";

function Footer() {
    return (
        <div id="footer">
            <img src="https://i.pinimg.com/564x/86/4a/3e/864a3e877dc16143e216b145da06a336.jpg" alt="pic" id="footer-logo" />
            <div className="company-footer">
                <h2>FREIGHTX</h2>
                <p>4653-Kilindini</p>
                <p>Copyright © 2024</p>
            </div>
            <div id="contacts">
                <h2>Contact us on:</h2>
                <ul>
                    <li>Twitter ....: @freightx</li>
                    <li>Instagram: @freightx</li>
                    <li>Facebook: @freightx</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
