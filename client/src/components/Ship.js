import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import '../css/ship.css';

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

function Ship() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [cargoType, setCargoType] = useState(contractors[0]);
  const [shipImage, setShipImage] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/ships/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched ship:", data);
        setShip(data);
        // Determine which image to display based on ship category
        if (data.category === "passenger") {
          setShipImage("https://i.pinimg.com/564x/04/0b/a3/040ba35d25e71f55a16d44b32e182062.jpg");
        } else if (data.category === "cargo") {
          setShipImage("https://i.pinimg.com/564x/09/08/11/09081161ae49ef96bc251cdd34279e8d.jpg");
        }
      })
      .catch((error) => {
        console.error("Error fetching ship:", error);
      });
  }, [id]);

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(0, quantity + delta));
  };

  const handleCargoTypeChange = (e) => {
    setCargoType(e.target.value);
  };

  const handleBooking = () => {
    // Implement booking logic here based on ship type
    // For demonstration purposes, logging the booking details
    if (ship.category === "passenger") {
      console.log(`Booked ${quantity} tickets for ${ship.name}`);
    } else if (ship.category === "cargo") {
      console.log(`Booked cargo type ${cargoType} for ${ship.name}`);
    }
  };

  if (!ship) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="ship-container">
        <div className="ship-photo">
          <img src={shipImage} alt="Ship" />
        </div>
        <div className="ship-details">
          <h1>{ship.name}</h1>
          <p id="category">Category: {ship.category}</p>
          <p id="departure">Departure: {ship.port_from.name}</p>
          <p id="arrival">Arrival: {ship.port_to.name}</p>
          <div id="tickets">
            <p id="total-tickets">Total Tickets: {ship.total_tickets}</p>
            <p id="remaining-tickets">Remaining Tickets: {ship.available_tickets}</p>
          </div>
          <p id="price">Price: ${ship.price}</p>
          {ship.category === "passenger" && (
            <div id="quantity">
              <label>Number of Tickets</label>
              <div id="quantity-controls">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>
          )}
          {ship.category === "cargo" && (
            <div id="brand">
              <label htmlFor="cargoType">Select Cargo Type:</label>
              <select
                id="cargoType"
                value={cargoType}
                onChange={handleCargoTypeChange}
              >
                {contractors.map((contractor, index) => (
                  <option key={index} value={contractor}>
                    {contractor}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div id="buttons">
            <button onClick={handleBooking}>
              Book
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ship;
