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








const PixelArtContainer = () => {
    const IMAGES =
    [{
        src: MollySpriteWalk,
        thumbnail: MollySpriteWalk,
        margin: 3

        
    },
    {
        src: MollyJump,
        thumbnail: MollyJump,
        margin: 3

    },
    {
        src: MollyKick,
        thumbnail: MollyKick,
        margin: 3
    },
    {
        src: MollyRun,
        thumbnail: MollyRun,

    },
    {
        src: MollySpin,
        thumbnail: MollySpin,

    },
    {
        src: MollyWalk,
        thumbnail: MollyWalk,

    },
    {
        src:Player,
        thumbnail:Player,
    },
    {
        src: Circle,
        thumbnail: Circle,
        margin: 3
    },
    {
        src: Sleek,
        thumbnail: Sleek,
        margin: 3
    },

    {
        src: Boss1,
        thumbnail: Boss1,
        margin: 3
    },
    {
        src: Exp4,
        thumbnail: Exp4,
        margin: 3
    },
    {
        src: Exp5,
        thumbnail: Exp5,
        margin: 3
    },
    {
        src: Exp6,
        thumbnail: Exp6,
        margin: 3
    }
    ]


    return(
        <div className="pixelart-container">
        <div className="pixelart-text">
            <h1>Part of the fun of making games, is making assets. I particularly enjoy the pixel art aesthetic.</h1>
            <h1>Here's some example I've created for games I've built or in the process of building.</h1>

            </div>
            <Ratio ratio={16 / 9}>
            <div className="pixelart-images">
                <Gallery images={IMAGES} />
            </div>
            </Ratio>
        
        </div>
    )
}

export default PixelArtContainer