import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Ports from "./Ports";
import Ship from "./Ship";
import Shiplist from "./Shiplist";
import Navbar from "./Navbar";
import User from "./User";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/home" /> : <Auth onLogin={setUser} isLogin={true} />}
        </Route>
        <Route path="/signup">
          {user ? <Redirect to="/home" /> : <Auth onLogin={setUser} isLogin={false} />}
        </Route>
        <Route path="/home">
          {user ? <Home user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/port">
          {user ? <Ports user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/ships/:id">
          {user ? <Ship user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/ports/:id/ships" render={(props) => (
          user ? <Shiplist category="cargo" {...props} /> : <Redirect to="/login" />
        )} />
        <Route path="/ports/:id/ships" render={(props) => (
          user ? <Shiplist category="passenger" {...props} /> : <Redirect to="/login" />
        )} />
        <Route path="/user">
          {user ? <User user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          {user ? <Home user={user} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
