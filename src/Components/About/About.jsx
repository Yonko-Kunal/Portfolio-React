import React from 'react'
import './About.css'
import About_img from '../../assets/about-me-profile-img.jpg'

const About = () => {
    return (
        <div id='aboutId' className='about'>
            <div className="about-me">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img loading='lazy' src={About_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis blanditiis inventore corrupti neque ex pariatur animi at maxime esse, saepe, officia distinctio est iusto suscipit ea numquam quod deserunt minus. Ratione, totam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aut eligendi magnam consequatur, magni placeat.</p>
                    </div>
                    <div className="about-skill-container">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: '50%' }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievement-container">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
            </div>
        </div>
    )
}

export default About