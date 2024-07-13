// User.js

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const mockUserData = {
  "_password_hash": "2bkRk5kI1J0k)2Qf",
  "balance": 4298,
  "email": "joyce20@example.com",
  "id": 1,
  "name": "Rchard Stout",
  "passengers": [],
  "transactions": []
};

function User() {
  const [user, setUser] = useState(null);

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

  if (!user) {
    // Use the mock user data until the fetch completes
    return (
      <div>
        <Navbar />
        <div className="user-container">
          <div className="user-photo">
            <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="User" />
          </div>
          <div className="user-details">
            <h1>{mockUserData.name}</h1>
            <p>Email: {mockUserData.email}</p>
            <p>Balance: {mockUserData.balance}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="user-container">
        <div className="user-photo">
          <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="User" />
        </div>
        <div className="user-details">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Balance: {user.balance}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;
