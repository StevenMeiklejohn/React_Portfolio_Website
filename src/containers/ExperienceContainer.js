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

const ExperienceConatiner = () => {



    const IMAGES =
        [{
            src: hibernate,
            thumbnail: hibernate,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "hibernate", title: "hibernate" }],
            caption: "hibernate"
        },
        {
            src: ic,
            thumbnail: ic,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "ic design", title: "ic design" }],
            caption: "ic design"
        },
        {
            src: java,
            thumbnail: java,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "java", title: "java" }],
            caption: "java"
        },
        {
            src: js,
            thumbnail: js,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "js", title: "js" }],
            caption: "js"
        },
        {
            src: mongodb,
            thumbnail: mongodb,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "mongodb", title: "mongodb" }],
            caption: "mongodb"
        },
        {
            src: python,
            thumbnail: python,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "python", title: "python" }],
            caption: "python"
        },
        {
            src: react,
            thumbnail: react,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "react", title: "react" }],
            caption: "react"
        },
        {
            src: ruby,
            thumbnail: ruby,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "ruby", title: "ruby" }],
            caption: "ruby"
        },
        {
            src: spring,
            thumbnail: spring,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "spring", title: "spring" }],
            caption: "spring"
        },
        {
            src: sql,
            thumbnail: sql,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "sql", title: "sql" }],
            caption: "sql"
        },
        {
            src: unity,
            thumbnail: unity,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "unity", title: "unity" }],
            caption: "unity"
        },
        {
            src: vue,
            thumbnail: vue,
            thumbnailWidth: 15,
            thumbnailHeight: 15,
            tags: [{ value: "vue", title: "vue" }],
            caption: "vue"
        }
        ]


    return (
        <div className="experience-container">
            <div className="experience-text">
                <h1>Having spent the early part of my career designing the layout of laptop PCBs and Integrated circuits, around 5 years ago I switched careers into software engineering.</h1>
                <h1>I am currently the senior instructor in Codeclan Glasgow where I manage the instructor team, deliver the 16 week immersive software development course and work on course development.</h1>
            </div>
            <Ratio ratio={16 / 9}>
            <div className="experience-images">
                <Gallery images={IMAGES} />
            </div>
            </Ratio>
        </div>
    )
}

export default ExperienceConatiner