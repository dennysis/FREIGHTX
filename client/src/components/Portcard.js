import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/potcard.css";
import { useHistory } from "react-router-dom";

function PortCard({ port, category }) {
  const history = useHistory();

  const handleViewShips = () => {
    history.push(`/ports/${port.id}/ships`);
  };

  return (
    <div className="card port-card">
      <img
        src={port.image_url}
        alt={port.name}
        className="card-img-top port-card-image"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{port.name}</h5>
        <p className="card-text">{port.location}</p>
        <button className="btn btn-primary" onClick={handleViewShips}>
          View Ships
        </button>
      </div>
    </div>
  );
}

export default PortCard;
