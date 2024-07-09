import React from "react";
import Navbar from "./Navbar";


function User() {
    return (
        <div>
            <Navbar />
            {/* <div id="user-details">
                <img src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="user logo" id="user-logo" />
                <p id="user-name">{user.username}</p>
                <p id="balance ">{user.balance}</p>
                <ul id="user-ports">
                    {user.transactions.map((transaction) => (
                        <li key={transaction.id}>
                            <p>{transaction.name}</p>
                        </li>
                    ))}
                </ul>

            </div> */}
        </div>
    );
}
export default User