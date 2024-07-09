import React,{ useState, useEffect } from "react";
import Navbar from "./Navbar";
function Home({ user }) {

    return (
        <div>
            <Navbar user={user} />
            <h1>Home</h1>
        </div>
    );
}
export default Home