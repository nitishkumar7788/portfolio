import React from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../Container/Home/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
