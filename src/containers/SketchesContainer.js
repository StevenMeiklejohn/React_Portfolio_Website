import React from 'react'
import Gallery from 'react-grid-gallery';
import Ratio from 'react-ratio';
import bat from '../assets/artwork/bat2.jpg'
import chinese from '../assets/artwork/chinese.jpg'
import close from '../assets/artwork/close_up.jpg'
import dad from '../assets/artwork/dad.png'
import molly2 from '../assets/artwork/molly_new.jpg'
import geneWilder from '../assets/artwork/geneWilder.jpg'
import japanese from '../assets/artwork/japanese_lady.jpg'
import jyn from '../assets/artwork/jyn3.jpg'
import lookup from '../assets/artwork/lookup.jpg'
import molly from '../assets/artwork/molly.jpg'
import old from '../assets/artwork/old_face.jpg'
import ripley from '../assets/artwork/Ripley.jpg'




const SketchesConatiner = () => {



    const IMAGES =
        [{
            src: molly2,
            thumbnail: molly2,


        },
        {
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