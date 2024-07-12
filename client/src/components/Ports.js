import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PortCard from "./Portcard";
function Ports() {
    const  [ports, setPorts] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/ports")
        .then((res) => res.json())
        .then((data) => setPorts(data));
    })
    return (
        <div>
            <Navbar />
            <h1 id="head">Cargo booking</h1>
            <div className="ports-container">
                {ports.map((port) => (
                    <PortCard key={port.id} port={port} />
                ))}
            </div>
        </div>
    );
}
export default Ports