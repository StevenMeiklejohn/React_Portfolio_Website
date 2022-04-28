import React from 'react'
import Gallery from 'react-grid-gallery';
import Ratio from 'react-ratio';
import cadence from '../assets/logos/Cadence-Logo.png'
import hibernate from '../assets/logos/hibernate.png'
import ic from '../assets/logos/ic_icon.png'
import java from '../assets/logos/java_icon.jpg'
import js from '../assets/logos/js_icon.png'
import mongodb from '../assets/logos/mongodb.png'
import pcb from '../assets/logos/pcb_icon.png'
import python from '../assets/logos/python_icon.png'
import react from '../assets/logos/react_icon.png'
import ruby from '../assets/logos/ruby_icon.png'
import spring from '../assets/logos/spring.png'
import sql from '../assets/logos/sql_icon.png'
import unity from '../assets/logos/unity_icon.png'
import vue from '../assets/logos/vue_icon.png'
import teaching from '../assets/logos/teaching.jpeg';
import course from '../assets/logos/course_development.jpeg';



const ExperienceConatiner = () => {




    return (
        <div class="experience-container">
  
        <div class="layout">
            <div class="col experience-col-main">
             <div className="experience-text">
             <p>Having spent the early part of my career designing the layout of laptop PCBs and Integrated circuits, in 2017 I switched careers into software engineering.</p>
             <p>I subsequently spent the next five years working as a senior instructor in Codeclan Glasgow where I also managed the instructor team, delivered the 16 week immersive software development course and worked on course development.</p>
             <p>I currently work as a Software Engineer for FanDuel.</p>
             </div>

            <br></br>
            </div>
            <div className="experience-wrapper">
            <div className="col experience-col-complementary" role="complementary">
            <div className="experience-element">
                <img className="experience-element-image" src={hibernate} />
                <div className="experience-element-text">
                <p>Hibernate</p>
                </div>
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={java} />
                <div className="experience-element-text">
                <p>Java</p>
                </div>
            </div>
            <div className="experience-element">
                <img className="experience-element-image" src={js} />
                <div className="experience-element-text">
                <p>Javascript</p>
                </div>
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={react} />
                <div className="experience-element-text">
                <p>React</p>
                </div>
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={mongodb} />
                <div className="experience-element-text">
                <p>MongoDB</p>
                </div>
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={python} />
                <div className="experience-element-text">
                <p>Python</p>
                </div>
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={ruby} />
                <div className="experience-element-text">
                <p>Ruby</p>
                </div>
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={spring} />
                <div className="experience-element-text">
                <p>Spring</p>
                </div>
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={sql} />
                <div className="experience-element-text">
                <p>SQL</p>
                </div>
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={unity} />
                <div className="experience-element-text">
                <p>Unity</p>
                </div>
            </div>

            <div className="experience-element">
                <img className="experience-element-image" src={vue} />
                <div className="experience-element-text">
                <p>Vue</p>
                </div>
            </div>

            <div className="experience-element2">
                <img className="experience-element-image" src={ic} />
                <div className="experience-element-text">
                <p>IC Design</p>
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

export default ExperienceConatiner


{/* <div className="experience-container">
<div className="experience-text">
    <h1>Having spent the early part of my career designing the layout of laptop PCBs and Integrated circuits, around 5 years ago I switched careers into software engineering.</h1>
    <h1>I am currently the senior instructor in Codeclan Glasgow where I manage the instructor team, deliver the 16 week immersive software development course and work on course development.</h1>
</div>
<Ratio ratio={16 / 9}>
<div className="experience-images">
    <Gallery images={IMAGES} />
</div>
</Ratio>
</div> */}