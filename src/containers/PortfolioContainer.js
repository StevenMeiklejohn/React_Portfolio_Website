import React from 'react' 
import marvel from '../assets/marvel_thumbnail.jpg'
import space from "../assets/space_bastards.jpg"
import blokus from "../assets/blokus.jpg"
import maps from "../assets/maps.jpg"
import running from "../assets/running.jpg"

const PortFolioContainer = () => {
    return(
        <div class="portfolio-container">
  
            <div class="layout">
                <div class="col portfolio-col-main">
                 <div className="portfolio-text">
                 <p>Some of the projects I have built for fun, in order to learn a new technology or for charity.</p>
                 <p>Click the screen grab to check them out..</p>
                 </div>

                <br></br>
                </div>
                <div className="portfolio-wrapper">
                <div className="col portfolio-col-complementary" role="complementary">
                <div className="portfolio-element">
                    <a href="http://marvelrecommender.com/">
                    <img className="portfolio-element-image" src={marvel} />
                    </a>
                    <br></br>
                    <br></br>
                    <div className="portfolio-text">
                    <p className='portfolio-element-title'>Marvel Recommender.</p>
                    <p>Webapp which allows Marvel comics fans to recommend series, story arcs, creators or issues to each other.</p>
                    <p>Front end: React</p>
                    <p>Back end: Spring/Docker</p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="portfolio-element">
                    <a href="https://simmer.io/@SteveMJohn/spacebastardsprototype">
                    <img className="portfolio-element-image" src={space} />
                    </a>
                    <br></br>
                    <br></br>
                    <div className="portfolio-text">
                    <p className="portfolio-element-title">Space Bastards</p>
                    <p>Scrolling 'shmup' a la R-type.</p>
                    <p>Built in Unity</p>
                    <p>Pixel art sprites, animations and assets.</p>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="portfolio-element">
                    <a href="https://github.com/StevenMeiklejohn/Blokus/tree/master">
                    <img className="portfolio-element-image" src={blokus} />
                    </a>
                    <br></br>
                    <br></br>
                    <div className="portfolio-text">
                    <p className="portfolio-element-title">Blokus</p>
                    <p>Web app version of the board game.</p>
                    <p>Built using vanilla JS</p>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="portfolio-element">
                    <a href="https://github.com/StevenMeiklejohn/React_Travel_Cost_Calculator">
                    <img className="portfolio-element-image" src={maps} />
                    </a>
                    <br></br>
                    <br></br>
                    <div className="portfolio-text">
                    <p className="portfolio-element-title">Travel Cost Calculator</p>
                    <p>Webapp which displays routes between postcodes and calculates incurred travel costs.</p>
                    <p>Built Using React.</p>
                    </div>
                </div>
                <br></br>
                <br></br>

                <div className="portfolio-element">
                    <a href="http://couch25gays.com/">
                    <img className="portfolio-element-image" src={running} />
                    </a>
                    <br></br>
                    <br></br>
                    <div className="portfolio-text">
                    <p className="portfolio-element-title">Run Tracker</p>
                    <p>Running tracker / motivational tool.</p>
                    <p>Allows a group to compare runs and collectively build towards a goal..</p>
                    </div>
                </div>
                <br></br>
                <br></br>


                </div>
                </div>
            </div>   
            </div>

    )
}

export default PortFolioContainer

