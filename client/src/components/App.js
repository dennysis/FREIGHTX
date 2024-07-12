import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Ports from "./Ports";

import Ship from "./Ship";
import Shiplist from "./Shiplist";
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
            <Route path="/port"
            render={(props) => <Ports user={user} {...props} />} />
            <Route path="/ship/:id"
            render={(props) => <Ship user={user} {...props} />} />
            <Route path="/ports/:id/ships" render={(props) => <Shiplist category="cargo" {...props} />} />
            <Route path="/ports/:id/ships" render={(props) => <Shiplist category="passenger" {...props} />} />
            {/* <Route path="/">
                {user ? <Home user={user} /> : <Redirect to="/login" />}
            </Route> */}
        </Switch>
    </div>
);
}

export default App;