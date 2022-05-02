import React from 'react' 
import Gallery from 'react-grid-gallery';
import Ratio from 'react-ratio';
import ReactDOM from 'react-dom';
import GifPlayer from 'react-gif-player';
import MollySpriteWalk from '../assets/pixelart/mollySpriteWalk.gif'
import Boss1 from '../assets/pixelart/boss1_ver2.gif'
import Circle from '../assets/pixelart/enemy_alien_circle.gif'
import Sleek from '../assets/pixelart/enemy_sleek.gif'
import Exp4 from '../assets/pixelart/explosion4.gif'
import Exp5 from '../assets/pixelart/explosion5.gif'
import Exp6 from '../assets/pixelart/explosion6.gif'
import MollyJump from '../assets/pixelart/mollySpriteJump.gif'
import MollyKick from '../assets/pixelart/mollySpriteKick.gif'
import MollyRun from '../assets/pixelart/mollySpriteRun.gif'
import MollySpin from '../assets/pixelart/mollySpriteSpinKick.gif'
import MollyWalk from '../assets/pixelart/mollySpriteWalk.gif'
import Player from '../assets/pixelart/playerFly.gif'
import PlayerDamaged from '../assets/pixelart/player_damaged.gif'








const PixelArtContainer = () => {



    return(
        <div class="experience-container">
  
        <div class="layout">
            <div class="col experience-col-main">
             <div className="experience-text">
             <p>Part of the fun of making games, is making assets. I particularly enjoy the pixel art aesthetic.</p>
             <p>Here's some example I've created for my own games</p>
             </div>

            <br></br>
            </div>
            <div className="experience-wrapper">
            <div className="col experience-col-complementary" role="complementary">
            <div className="experience-element">
                <img className="experience-element-image" src={MollySpriteWalk} />
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={MollyRun} />
            </div>
            <div className="experience-element">
                <img className="experience-element-image" src={MollyKick} />

            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={MollySpin} />
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={MollyWalk} />

            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={Player} />
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={PlayerDamaged} />
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={Boss1} />
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={Circle} />
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={Sleek} />
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={Exp4} />
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={Exp5} />
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={Exp6} />
            </div>


            <br></br>
            <br></br>


 


            </div>
            </div>
        </div>   
        </div>

    )
}

export default PixelArtContainer



{/* <div className="pixelart-container">
<div className="pixelart-text">
    <h1>Part of the fun of making games, is making assets. I particularly enjoy the pixel art aesthetic.</h1>
    <h1>Here's some example I've created for my own games</h1>

    </div>
    <Ratio ratio={16 / 9}>
    <div className="pixelart-images">
        <Gallery images={IMAGES} />
    </div>
    </Ratio>

</div> */}