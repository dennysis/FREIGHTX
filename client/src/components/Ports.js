import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PortCard from "./Portcard";
import "../css/potcard.css";

function Ports({ user }) {
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/ports")
      .then((res) => res.json())
      .then((data) => setPorts(data))
      .catch((error) => console.error("Error fetching ports:", error));
  }, []); // Add empty dependency array to run effect only once

  return (
    <div className="ports-page">
      <Navbar user={user} />
      <div className="ports-content">
        <h1 id="head">Port Hubs</h1>
        <div className="ports-container">
          {ports.map((port) => (
            <PortCard key={port.id} port={port} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ports;
