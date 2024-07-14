import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Ports from "./Ports";
import Ship from "./Ship";
import Shiplist from "./Shiplist";
import Navbar from "./Navbar";
import User from "./User";
import Footer from "./Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check session when component mounts
    checkSession();

    // Add event listener for when user is about to leave the page
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      handleLogout();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const checkSession = () => {
    fetch("/checksession", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("User not authenticated");
        }
      })
      .then((user) => setUser(user))
      .catch((error) => {
        console.error("Session check error:", error);
        setUser(null);
      });
  };

  const handleLogout = () => {
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          setUser(null);
        }
      })
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          {user ? (
            <Redirect to="/home" />
          ) : (
            <Auth onLogin={setUser} isLogin={true} />
          )}
        </Route>
        <Route path="/signup">
          {user ? (
            <Redirect to="/home" />
          ) : (
            <Auth onLogin={setUser} isLogin={false} />
          )}
        </Route>
        <Route path="/home">
          {user ? <Home user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route
          path="/ports/:id/ships"
          render={(props) =>
            user ? (
              <Shiplist category="cargo" {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/ports/:id/ships"
          render={(props) =>
            user ? (
              <Shiplist category="passenger" {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/port">
          {user ? <Ports user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/ship/:id">
          {user ? <Ship user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/user">
          {user ? <User user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          {user ? <Home user={user} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
