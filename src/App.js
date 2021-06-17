
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <MainContainer />
        </Switch>
    </Router>
  );
}

export default App;
