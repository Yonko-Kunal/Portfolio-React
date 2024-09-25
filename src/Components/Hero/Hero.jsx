import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-photo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

    const gitLinkFunction = () => {
        window.open('https://github.com/Yonko-Kunal', '_blank')
    };
    return (
        <div id='homeId' className='Hero'>
            <div className="profile-img">
                <img onClick={gitLinkFunction} src={profile_img} alt="" />
            </div>
            <h1><span>Kunal Roy</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero alias quas amet, quaerat porro ducimus voluptas</p>
            <div className="Hero-action">
                <div className="Hero-connect"><AnchorLink className='anchor-list' offset={50} href='#contactId'>Connect With Me</AnchorLink></div>
                <div className="Hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero