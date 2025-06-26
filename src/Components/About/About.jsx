import React from 'react'
import './About.css'
import About_img from '../../assets/about-me-profile-img.jpg'
import react_logo from '../../assets/react-logo.svg'
import html_logo from '../../assets/html-logo.svg'
import css_logo from '../../assets/css-logo.svg'
import redux_logo from '../../assets/redux-logo.svg'
import postman_logo from '../../assets/postman-logo.svg'
import tailwind_logo from '../../assets/tailwind.svg'

const About = () => {
    return (
        <div id='aboutId' className='about'>
            <div className="about-me">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                {/* <div className="about-left">
                    <img loading='lazy' src={About_img} alt="" />
                </div> */}
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a BCA graduate learning software engineering. I build good quality and visually appealing websites with clean code and user-focused design. I also use AI, which allows me to build websites faster. I am very interested in having an opportunity to work on a real-world project and collaborate with other people, which will allow me to grow as a productive software engineer. Currently, I’m learning backend development while actively building real-world projects.</p>
                    </div>
                    {/* <div className="about-skill-container">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: '50%' }} /></div>
                    </div> */}
                </div>
            </div>
            <div className='scroll-skills'>
                <div className="scroll-items-container">
                    <img loading="lazy" src={react_logo} alt="React Logo" />
                    <img loading="lazy" src={html_logo} alt="HTML Logo" />
                    <img loading="lazy" src={css_logo} alt="CSS Logo" />
                    <img loading="lazy" src={redux_logo} alt="Redux Logo" />
                    <img loading="lazy" src={postman_logo} alt="Postman Logo" />
                    <img loading="lazy" src={tailwind_logo} alt="Tailwind Logo" />
                </div>
                <div className="scroll-items-container">
                    <img loading="lazy" src={react_logo} alt="React Logo" />
                    <img loading="lazy" src={html_logo} alt="HTML Logo" />
                    <img loading="lazy" src={css_logo} alt="CSS Logo" />
                    <img loading="lazy" src={redux_logo} alt="Redux Logo" />
                    <img loading="lazy" src={postman_logo} alt="Postman Logo" />
                    <img loading="lazy" src={tailwind_logo} alt="Tailwind Logo" />
                </div>
            </div>
            {/* <div className="about-achievement-container">
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
            </div> */}
        </div>
    )
}

export default About