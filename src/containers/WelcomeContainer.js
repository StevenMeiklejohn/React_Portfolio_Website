import React from 'react'
import profilePic from '../assets/profilePic.jpg'
import Ratio from 'react-ratio';

const WelcomeContainer = () => {




    return(
        <div className="welcome">
            <div className="welcome-text">
                <h1>Hi! I'm Steve Meiklejohn</h1>
                <h1>I'm a full stack developer based in Glasgow, UK.</h1>
                <h1>I love making useful and entertaining websites, applications and video games.</h1>
                <h1>and teaching others how to do so.</h1>
                <h1>I also have a background in (and experience of) PCB and IC layout and design.</h1>
                <h1>I am currently senior instructor of the intensive 16 week coding course at Codeclan Glasgow</h1> 
                <h1>where I also manage the instructor team.</h1>
            </div>
            <Ratio ratio={ 16 / 9 }>
            <div className="welcome-image">
                <img src={profilePic}/>
            </div>
            </Ratio>
        </div>
    )
    
}

export default WelcomeContainer