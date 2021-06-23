import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from "./PortfolioContainer"
import Experience from "./ExperienceContainer"
import PixelArt from "./PixelArtContainer"
import Sketches from "./SketchesContainer"
import Welcome from "./WelcomeContainer"
// import NavBar from "../NavBar"

const MainContainer = () => {


    return(
        <Router>
        <>
        {/* <NavBar /> */}
        <Switch>
            <Welcome exact path="/" component={Welcome}/>
            <Portfolio path="/portfolio" component={Portfolio} />
            <Experience path="/experience" component={Experience} />
            <PixelArt path="/pixelart" component={PixelArt}/>
            <Sketches path="/sketches" component={Sketches}/>
        </Switch>
        </>
        </Router>
    )
}

export default MainContainer