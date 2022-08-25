import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";

import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark ">
          <Link to={"/"} className="navbar-brand">
            <img src={process.env.PUBLIC_URL+"img.png"} />
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Home
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Login} />
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
