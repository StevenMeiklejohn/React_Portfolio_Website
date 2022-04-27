import React from 'react'
import profilePic from '../assets/profilePic.jpg'
import Ratio from 'react-ratio';
import Image from "react-bootstrap/Image";

const WelcomeContainer = () => {




    return (
        <div class="welcome-container">
  
            <div class="layout">
                <div class="col col-main">
                 <div className="welcome-text">
                 <h1>Hi! I'm Steve Meiklejohn</h1>
                 <p>I'm a full stack developer based in Glasgow, UK.</p>
                 <p>I love making and teaching people how to make useful, entertaining websites, applications and video games.</p>
                 <p>I also have a background in (and experience of) PCB and IC layout and design.</p>
                 </div>

                <br></br>
                </div>
                <div className="col col-complementary" role="complementary">
                <Image  className="welcome-image" src={profilePic} roundedCircle fluid/>
                </div>
            </div>   
            </div>




        /* // <div className="welcome">
        //     <div className="welcome-text">
        //         <h1>Hi! I'm Steve Meiklejohn</h1>
        //         <h1>I'm a full stack developer based in Glasgow, UK.</h1>
        //         <h1>I love making useful and entertaining websites, applications and video games.</h1>
        //         <h1>and teaching others how to do so.</h1>
        //         <h1>I also have a background in (and experience of) PCB and IC layout and design.</h1>
        //         <h1>I am currently senior instructor of the intensive 16 week coding course at Codeclan Glasgow</h1>
        //         <h1>where I also manage the instructor team.</h1>
        //     </div>
        //     <div>
        //     <Image className="welcome-image" src={profilePic} roundedCircle fluid/>
        //     </div>
        // </div> */
    )

}

export default WelcomeContainer