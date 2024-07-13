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
    fetch("http://127.0.0.1:5555/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleDeposit = () => {
    fetch(`http://127.0.0.1:5555/users/${user.id}`, {
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
      <div className="user-container">
        <div className="user-photo">
          <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="User" />
        </div>
        <div className="user-details">
          <h1 id="user-name">{userData.name}</h1>
          <p id="user-email">Email: {userData.email}</p>
          <div className="balance-bar">
            <span>Balance: </span>
            <div className="balance-amount">${userData.balance}</div>
          </div>
          <button onClick={() => setShowDepositBar(!showDepositBar)}>
            {showDepositBar ? "Cancel" : "Deposit"}
          </button>
          {showDepositBar && (
            <div className="deposit-bar">
              <input 
                type="number" 
                value={depositAmount} 
                onChange={handleDepositChange} 
                placeholder="Deposit Amount" 
              />
              <button onClick={handleDeposit}>Confirm Deposit</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;
