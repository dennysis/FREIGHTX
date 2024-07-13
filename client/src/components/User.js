import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleDelete = (transactionId) => {
    fetch(`/api/transactions/${transactionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setUser((prevUser) => ({
            ...prevUser,
            transactions: prevUser.transactions.filter(
              (transaction) => transaction.id !== transactionId
            ),
          }));
        } else {
          console.error("Failed to delete transaction");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar user={user} />
      <div id="user-details">
        <img
          src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
          alt="user logo"
          id="user-logo"
        />
        <p id="user-name">{user.username}</p>
        <p id="balance">Balance: {user.balance}</p>
        <ul id="user-transactions">
          {user.transactions.map((transaction) => (
            <li key={transaction.id}>
              <p>{transaction.name}</p>
              <button onClick={() => handleDelete(transaction.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default User;
