import React from "react";
import "../css/potcard.css"; 
import { useHistory } from "react-router-dom";

function PortCard({ port, category }) {
  const history = useHistory();

  const handleViewShips = () => {
    history.push(`/ports/${port.id}/ships`);
  };

  return (
    <div className="port-card">
      <img src={port.image_url} alt={port.name} className="port-card-image" />
      <h3>{port.name}</h3>
      <p>{port.location}</p>
      <button id="button" onClick={handleViewShips}>View ships</button>
    </div>
  );
}

export default PortCard;
