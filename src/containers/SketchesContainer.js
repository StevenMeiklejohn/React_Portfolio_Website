import React from 'react'
import Gallery from 'react-grid-gallery';
import Ratio from 'react-ratio';
import bat from '../assets/artwork/bat2.png'
import chinese from '../assets/artwork/chinese.png'
import close from '../assets/artwork/close_up.png'
import dad from '../assets/artwork/dad.png'
import fleabag from '../assets/artwork/fleabag.png'
import geneWilder from '../assets/artwork/geneWilder.png'
import japanese from '../assets/artwork/japanese_lady.png'
import jyn from '../assets/artwork/jyn3.png'
import lookup from '../assets/artwork/lookup.png'
import molly from '../assets/artwork/molly.png'
import old from '../assets/artwork/old_face.png'
import ripley from '../assets/artwork/Ripley.png'




const SketchesConatiner = () => {



    const IMAGES =
        [{
            src: ripley,
            thumbnail: ripley,

        },
        {
            src: old,
            thumbnail: old,

        },
        {
            src: molly,
            thumbnail: molly,

        },
        {
            src: lookup,
            thumbnail: lookup,

        },
        {
            src: jyn,
            thumbnail: jyn,

        },
        {
            src: japanese,
            thumbnail: japanese,

        },
        {
            src: geneWilder,
            thumbnail: geneWilder,

        },
        {
            src: fleabag,
            thumbnail: fleabag,


        },
        {
            src: close,
            thumbnail: close,
            
            

        },
        {
            src: chinese,
            thumbnail: chinese,
            
            

        },
        {
            src: bat,
            thumbnail: bat,
            
            

        }
        ]


    return (
        <div className="sketches-container">
            <div className="sketches-text">
                <h1>In my spare time I love drawing and creating art.</h1>
                <h1>These are some examples of my work.</h1>
            </div>
            <Ratio ratio={16 / 9}>
            <div className="sketches-images">
                <Gallery images={IMAGES} />
            </div>
            </Ratio>
        </div>
    )
}

export default SketchesConatiner