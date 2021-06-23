import React from 'react' 
import marvel from '../assets/marvel_thumbnail.png'
import space from "../assets/space_bastards.png"
import blokus from "../assets/blokus.png"
import maps from "../assets/maps.png"
import running from "../assets/running.png"

const PortFolioContainer = () => {
    return(
        <>
        <div className="portfolio-text">
        <h1>Some of the projects I have built for fun, in order to learn a new technology or for charity.</h1>
        <h1>Click the screen grab to check them out..</h1>

        </div>
        <div className="portfolio-display">
        <div className="portfolio-element">
            <a href="http://marvelrecommender.com/">
            <img src={marvel} />
            </a>
            <h1 className="underlined">Marvel Recommender.</h1>
            <h1 className="noselect">Webapp which allows Marvel comics fans to recommend series, story arcs, creators or issues to each other.</h1>
            <h1 className="noselect">Front end: React</h1>
            <h1 className="noselect">Back end: Spring/Docker</h1>
            
        </div>
        <div className="portfolio-element">
            <a href="https://simmer.io/@SteveMJohn/spacebastardsprototype">
            <img src={space} />
            </a>
            <h1 className="underlined">Space Bastards.</h1>
            <h1>Scrolling 'shmup' a la R-type.</h1>
            <h1>Built in Unity</h1>
            <h1>Pixel art sprites, animations and assets.</h1>
     
        </div>
        <div className="portfolio-element">
            <a href="https://github.com/StevenMeiklejohn/Blokus/tree/master">
            <img src={blokus} />
            </a>
            <h1 className="underlined">Blokus.</h1>
            <h1>Web app version of the board game.</h1>
            <h1>Built using vanilla JS</h1>
            
        </div>
        <div className="portfolio-element">
            <a href="https://github.com/StevenMeiklejohn/React_Travel_Cost_Calculator">
            <img src={maps} />
            </a>
            <h1 className="underlined">Travel Cost Calculator.</h1>
            <h1>Webapp which displays routes between postcodes and calculates incurred travel costs.</h1>
            <h1>Built Using React.</h1>

        </div>
        <div className="portfolio-element">
            <a href="http://couch25gays.com/">
            <img src={running} />
            </a>
            <h1 className="underlined">Run Tracker.</h1>
            <h1>Running tracker / motivational tool.</h1>
            <h1>Allows a group to compare runs and collectively build towards a goal..</h1>

        </div>
        </div>
        </>
    )
}

export default PortFolioContainer