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
    const IMAGES =
    [{
        src: MollySpriteWalk,
        thumbnail: MollySpriteWalk,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,

        
    },
    {
        src: MollyJump,
        thumbnail: MollyJump,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,

    },
    {
        src: MollyKick,
        thumbnail: MollyKick,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,
    },
    {
        src: MollyRun,
        thumbnail: MollyRun,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,

    },
    {
        src: MollySpin,
        thumbnail: MollySpin,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,

    },
    {
        src: MollyWalk,
        thumbnail: MollyWalk,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,

    },
    {
        src:Player,
        thumbnail:Player,
        margin: 3,
        thumbnailWidth: 12,
        thumbnailHeight: 10,
    },
    {
        src:PlayerDamaged,
        thumbnail:PlayerDamaged,
        margin: 3,
        thumbnailWidth: 12,
        thumbnailHeight: 10,
    },
    {
        src: Circle,
        thumbnail: Circle,
        margin: 3,
        thumbnailWidth: 12,
        thumbnailHeight: 10,
    },
    {
        src: Sleek,
        thumbnail: Sleek,
        margin: 3,
        thumbnailWidth: 12,
        thumbnailHeight: 10,
    },

    {
        src: Boss1,
        thumbnail: Boss1,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,
    },
    {
        src: Exp5,
        thumbnail: Exp5,
        margin: 3,
        thumbnailWidth: 10,
        thumbnailHeight: 10,
    },
    {
        src: Exp6,
        thumbnail: Exp6,
        margin: 3,
        thumbnailWidth: 12,
        thumbnailHeight: 10,
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