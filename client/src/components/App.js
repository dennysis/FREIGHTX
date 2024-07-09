import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Cargo from "./Cargo";
import Passenger from "./Passenger";
import { Redirect } from "react-router-dom";
;

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
        <Switch>
            <Route path="/login">
                <Auth onLogin={setUser} isLogin={true} />
            </Route>
            <Route path="/signup">
                <Auth onLogin={setUser} isLogin={false} />
            </Route>
            <Route path="/home"
            render={(props) => <Home user={user} {...props} />} />
            <Route path="/cargo"
            render={(props) => <Cargo user={user} {...props} />} />
            <Route path="/passenger"
            render={(props) => <Passenger user={user} {...props} />} />
            {/* <Route path="/">
                {user ? <Home user={user} /> : <Redirect to="/login" />}
            </Route> */}
        </Switch>
    </div>
);
}

export default App;