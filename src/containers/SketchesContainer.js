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

const images = {
    "bat": bat,
    "ripley": ripley,
    "chinese": chinese,
    "close": close,
    "molly": molly,
    "molly2": molly2,
    "japanese": japanese,
    "jyn": jyn,
    "lookup": lookup,
    "old": old
}



    const imageClicked = (event)=>{
        console.log(event.target.name);
        console.log(images[event.target.name]);
        let imageSrc = images[event.target.name]
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = imageSrc;
        

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }
    


    return (
        <div class="experience-container">
  
        <div class="layout">
            <div class="col experience-col-main">
             <div className="experience-text">
             <p>In my spare time I love drawing and creating art.</p>
             <p>These are some examples of my work.</p>
             </div>

            <br></br>
            </div>
            <div className="experience-wrapper">
            <div className="col experience-col-complementary" role="complementary">

            <div onClick={imageClicked} name="bat" value="bat" className="experience-element2">
                <img className="experience-element-image" name="bat" value="bat" src={bat} />
            </div>

            <div onClick={imageClicked} name="ripley" value="ripley" className="experience-element2">
                <img className="experience-element-image" name="ripley" value="ripley" src={ripley} />
            </div>

            <div onClick={imageClicked} name="old" value="old" className="experience-element2">
                <img className="experience-element-image" name="old" value="old" src={old} />
            </div>

            <div onClick={imageClicked} name="molly2" value="molly2" className="experience-element2">
                <img className="experience-element-image" name="molly2" value="molly2" src={molly2} />
            </div>

            <div onClick={imageClicked} name="molly" value="molly" className="experience-element2">
                <img className="experience-element-image" name="molly" value="molly" src={molly} />
            </div>

            <div onClick={imageClicked} name="close" value="close" className="experience-element2">
                <img className="experience-element-image" name="close" value="close" src={close} />
            </div>

            <div onClick={imageClicked} name="japanese" value="japanese" className="experience-element2">
                <img className="experience-element-image" name="japanese" value="japanese" src={japanese} />
            </div>

            <div onClick={imageClicked} name="jyn" value="jyn" className="experience-element2">
                <img className="experience-element-image" name="jyn" value="jyn" src={jyn} />
            </div>

            <div onClick={imageClicked} name="lookup" value="lookup" className="experience-element2">
                <img className="experience-element-image" name="lookup" value="lookup" src={lookup} />
            </div>
            <div onClick={imageClicked} name="chinese" value="chinese" className="experience-element2">
                <img className="experience-element-image" name="chinese" value="chinese" src={chinese} />
            </div>



            <br></br>
            <br></br>

            </div>
            </div>
        </div>  
        {/* <!-- The Modal --> */}
        <div id="myModal" class="modal">
{/* 
        <!-- The Close Button --> */}
        <span class="close">&times;</span>

        {/* <!-- Modal Content (The Image) --> */}
        <img class="modal-content" id="img01"/>

        {/* <!-- Modal Caption (Image Text) --> */}
        <div id="caption"></div>
        </div> 
        </div>

    )
}

export default SketchesConatiner



{/* <div className="sketches-container">
<div className="sketches-text">
    <h1>In my spare time I love drawing and creating art.</h1>
    <h1>These are some examples of my work.</h1>
</div>
<Ratio ratio={16 / 9}>
<div className="sketches-images">
    <Gallery images={IMAGES} />
</div>
</Ratio>
</div> */}