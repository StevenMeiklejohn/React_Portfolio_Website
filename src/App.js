
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import Navbar from "./components/NavBar/NavBar";
import GlobalStyle from './styles/Global';
import './App.css'


function App() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavBar = () => {
    console.log("handleNavBar called")
    setNavbarOpen(true)
  }
  return (
    <Router>
        <Navbar navbarState={navbarOpen} handleNavBar={handleNavBar}/>
        <Switch>
          <MainContainer />
        </Switch>
    </Router>
  );
}

export default App;
