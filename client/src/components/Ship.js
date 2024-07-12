import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom"; 
import "../css/ship.css"; 

const contractors = [
    "Maersk", "Mediterranean Shipping Company (MSC)", "CMA CGM Group",
    "COSCO Shipping", "Hapag-Lloyd", "ONE (Ocean Network Express)",
    "Evergreen Marine", "Yang Ming Marine Transport", "Hyundai Merchant Marine",
    "ZIM Integrated Shipping Services", "Pacific International Lines (PIL)",
    "Kawasaki Kisen Kaisha, Ltd. (K Line)", "Mitsui O.S.K. Lines (MOL)",
    "Nippon Yusen Kabushiki Kaisha (NYK Line)", "HMM (Hyundai Merchant Marine)",
    "Wan Hai Lines", "IRISL Group", "Hansa Heavy Lift", "Swire Shipping",
    "OOCL (Orient Overseas Container Line)"
];

function Ship({ ship }) {
    const [quantity, setQuantity] = useState(0);
    const [cargoType, setCargoType] = useState(contractors[0]);
    const { type } = useParams(); // Assuming the route is like /:type/:shipid

    const handleQuantityChange = (delta) => {
        setQuantity(Math.max(0, quantity + delta));
    };

    return (
        <div>
            <Navbar />
            <div className="ship-container">
                {/* <h1>{ship.name}</h1>
                <p>Category: {ship.category}</p>
                <p>Available Tickets: {ship.available_tickets}</p>
                <p>Total Tickets: {ship.total_tickets}</p> */}

                {type === "cargo" ? (
                    <div id="brand">
                        <label htmlFor="cargoType">Select Cargo Type:</label>
                        <select
                            id="cargoType"
                            value={cargoType}
                            onChange={(e) => setCargoType(e.target.value)}
                        >
                            {contractors.map((contractor, index) => (
                                <option key={index} value={contractor}>
                                    {contractor}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div id="quantity">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                )}

                <div id="buttons">
                    <button type="submit" style={{ backgroundColor: quantity > 0 ? 'green' : '' }}>
                        Book
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Ship;
