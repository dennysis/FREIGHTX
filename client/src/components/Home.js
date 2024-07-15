import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/home.css"; // Import your CSS file for styling

function Home({ user }) {
  return (
    <div>
      <Navbar user={user} />

      <div className="section">
        <img
          id="pic1"
          src="https://i.pinimg.com/564x/15/e6/ef/15e6efdbcc393a442a894ca291b6d40a.jpg"
          alt="pic"
          className="pic"
        />
        <div className="text">
          <h1>Welcome to FreightX</h1>
          <h2 className="headers">Who are we?</h2>
          <p className="p">
            FreightX is your gateway to the world, offering a seamless platform
            for sending and receiving goods, as well as booking passenger ships
            between global destinations. Experience the convenience and
            efficiency of our cutting-edge logistics solutions, connecting you
            to every corner of the globe with ease and reliability.{" "}
          </p>
        </div>
      </div>

      <div className="section alternate">
        <div className="text">
          <h2 className="headers">Online bookings and plans</h2>
          <p className="proverbs">
            ~He who does not adapt to change is a fool~
          </p>
          <p className="p">
            In light of current technologies and human behavior, we have become
            more and more accustomed to online services. In order to maintain
            our credibility and reliability, FREIGHTX allows users to book
            tickets as well as plan for cargo transportation at the comfort of
            their homes.
          </p>
        </div>
        <img
          id="pic2"
          src="https://i.pinimg.com/564x/fb/48/98/fb4898145cf39ff6e9c75bad1e062ec0.jpg"
          alt="pic"
          className="pic"
        />
      </div>

      <div id="section2" className="section">
        <img
          id="pic3"
          src="https://i.pinimg.com/564x/d5/a5/54/d5a55403bfc45d54f2fe7763b923cf40.jpg"
          alt="pic"
          className="pic"
        />
        <div className="text">
          <h2 className="headers">What are our Future Plans?</h2>
          <p className="proverbs">
            ~The secret to getting results is to never stop making
            improvements.~{" "}
          </p>
          <p className="p">
            As a company, we are constantly seeking to improve our services.
            Transport of cargo is a wide field especially in our field. In the
            future, we plan on providing better service and by God's grace we
            shall soon launch an aero wing within our company making it easier
            for our customers to commute.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
