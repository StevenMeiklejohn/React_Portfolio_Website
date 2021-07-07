import React from 'react' 
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








const PixelArtContainer = () => {
    return(
        <div className="pixelart-container">
        <div className="pixelart-text">
            <h1>Part of the fun of making games, is making assets. I particularly enjoy the pixel art aesthetic.</h1>
            <h1>Here's some example I've created for games I've built or in the process of building.</h1>


        </div>
        <div className="pixelart-images">
        <GifPlayer className="gifplayer" gif={MollySpriteWalk} still={MollySpriteWalk} />
        <GifPlayer className="gifplayer" gif={MollyJump} still={MollyJump} />
        <GifPlayer className="gifplayer" gif={MollyKick} still={MollyKick} />
        <GifPlayer className="gifplayer" gif={MollyRun} still={MollyRun} />
        <GifPlayer className="gifplayer" gif={MollySpin} still={MollySpin} />
        <GifPlayer className="gifplayer" gif={MollyWalk} still={MollyWalk} />
        <GifPlayer className="gifplayer" gif={Circle} still={Circle} />
        <GifPlayer className="gifplayer" gif={Sleek} still={Sleek} />
        <GifPlayer className="gifplayer" gif={Exp4} still={Exp4} />
        <GifPlayer className="gifplayer" gif={Exp5} still={Exp5} />
        <GifPlayer className="gifplayer" gif={Exp6} still={Exp6} />
        <GifPlayer className="gifplayer" gif={Player} still={Player} />
        <GifPlayer className="gifplayer" gif={Boss1} still={Boss1} />






        </div>
        </div>
    )
}

export default PixelArtContainer