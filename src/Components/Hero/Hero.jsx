import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-photo.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='homeId' className='Hero'>
            <img src={profile_img} alt="" />
            <h1><span>Hi I'm Kunal Roy,</span> Web Developer From Delhi, India</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero alias quas amet, quaerat porro ducimus voluptas</p>
            <div className="Hero-action">
                <div className="Hero-connect"><AnchorLink className='anchor-list' offset={50} href='#contactId'>Connect With Me</AnchorLink></div>
                <div className="Hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero