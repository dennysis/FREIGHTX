import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/user.css";

const mockUserData = {
  "_password_hash": "2bkRk5kI1J0k)2Qf",
  "balance": 4298,
  "email": "joyce20@example.com",
  "id": 1,
  "name": "Richard Stout",
  "passengers": [],
  "transactions": []
};

function User() {
  const [user, setUser] = useState(null);
  const [depositAmount, setDepositAmount] = useState(0);
  const [showDepositBar, setShowDepositBar] = useState(false);

  useEffect(() => {
    fetch("/checksession")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error("Error fetching user:", data.error);
          setUser(mockUserData);
        } else {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setUser(mockUserData); // Use mock data on error
      });
  }, []);

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleDeposit = () => {
    if (!user) return;

    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        balance: user.balance + parseFloat(depositAmount)
      })
    })
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
      setDepositAmount(0);
      setShowDepositBar(false); // Hide deposit bar after successful deposit
    })
    .catch((error) => {
      console.error("Error updating balance:", error);
    });
  };

  const userData = user || mockUserData;

  return (
    <div>
      <Navbar />
      <div className="container user-container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4 user-photo">
            <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="User" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-8 user-details">
            <h1 id="user-name" className="display-4">{userData.name}</h1>
            <p id="user-email" className="lead">Email: {userData.email}</p>
            <div className="balance-bar">
              <span className="h5">Balance:</span>
              <div className="balance-amount h5 ml-2">${userData.balance}</div>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => setShowDepositBar(!showDepositBar)}>
              {showDepositBar ? "Cancel" : "Deposit"}
            </button>
            {showDepositBar && (
              <div className="deposit-bar mt-3">
                <input 
                  type="number" 
                  className="form-control mb-2"
                  value={depositAmount} 
                  onChange={handleDepositChange} 
                  placeholder="Deposit Amount" 
                />
                <button className="btn btn-success" onClick={handleDeposit}>Confirm Deposit</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;
