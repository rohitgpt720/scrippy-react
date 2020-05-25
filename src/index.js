import React from "react";
import ReactDOM from "react-dom";

// import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

// import registerServiceWorker from "./registerServiceWorker";

// import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
// registerServiceWorker();
