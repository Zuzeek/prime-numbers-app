import React, { Component } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Link} from 'react-router-dom';
import "./App.css"; 
import { Navbar, Container, Nav } from 'react-bootstrap'

import AddNumbers from "./components/add-numbers.component";
import AllNumberList from "./components/number-list.component";
import PrimaryNumberList from "./components/primary-number-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Prime Numbers Checker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#add">
                <Link to={"/add"} className="nav-link">
                  Add Numbers
                </Link>
              </Nav.Link>
              <Nav.Link href="#numbers">
                <Link to={"/numbers"} className="nav-link">
                  Get All Numbers
                </Link>
              </Nav.Link>
              <Nav.Link href="#primeNumbers">
              <Link to={"/primeNumbers"} className="nav-link">
                Get Primary Numbers
              </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container mt-3"> 
          <Switch>
            <Route exact path="/add" component={AddNumbers} />
            <Route exact path="/numbers" component={AllNumberList} />
            <Route exact path="/primeNumbers" component={PrimaryNumberList} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App;
