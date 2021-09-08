import React, { Component } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Link } from 'react-router-dom';
import "./App.css"; 

import AddNumbers from "./components/add-numbers.component";
import AllNumberList from "./components/number-list.component";
import PrimaryNumberList from "./components/primary-number-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Prime Numbers Checker
          </a>
          <div className="navbar-nav mr-auto">
            <li className="navItem">
              <Link to={"/add"} className="nav-link">
                Add Numbers
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/numbers"} className="nav-link">
                Get All Numbers
              </Link>
            </li>
            <li className="navItem">
              <Link to={"/number"} className="nav-link">
                Get Primary Numbers
              </Link>
            </li>
          </div>
        </nav>
        
        <div className="container mt-3"> 
          <Switch>
            <Route exact path="/add" component={AddNumbers} />
            <Route exact path="/numbers" component={AllNumberList} />
            <Route exact path="/number" component={PrimaryNumberList} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App;
