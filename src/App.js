
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
// import Navbar from "./components/NavBar/NavBar";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import GlobalStyle from './styles/Global';
import Navigation from "./containers/Navigation";
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sprite from "./assets/mollySpriteKick.gif"

import './App.css'


function App() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavBar = () => {
    console.log("handleNavBar called")
    setNavbarOpen(!navbarOpen)
  }
  return (
    <Router>
        {/* <Navbar navbarState={navbarOpen} handleNavBar={handleNavBar}/> */}
        <Navbar fixed="top"className="color-nav" variant="light" expand="lg">
  <Container>

      <Navbar.Brand href="#home">
        <img
          alt=""
          src={sprite}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/experience">Experience</Nav.Link>
        <Nav.Link href="/pixelart">PixelArt</Nav.Link>
        <Nav.Link href="/sketches">Sketches</Nav.Link>

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Portfolio</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Experience</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Pixel Art</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Sketches</NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        <Switch>
          <Container>

          <MainContainer />
          </Container>
        </Switch>
    </Router>
  );
}

export default App;
