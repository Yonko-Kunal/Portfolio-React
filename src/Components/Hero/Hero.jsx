import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my-removebg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume_path from '../../../public/Resume/Kunal_Roy_Resume_WebDev.pdf'

const Hero = () => {

    const gitLinkFunction = () => {
        window.open('https://github.com/Yonko-Kunal', '_blank')
    }

    // const handleResumeDownload = () => {
    //     // Replace the URL with the path to your resume file
    //     const link = document.createElement('a');
    //     link.href = Resume_path; // Ensure this path matches the location of your PDF
    //     link.download = 'Kunal_Roy_Resume_WebDev.pdf'; // The name of the file when downloaded
    //     link.click();
    // }

    const handleResumeView = () => {
        window.open(Resume_path, '_blank');
    }

    return (
        <div id='homeId' className='Hero'>
            <div className="profile-img">
                <img loading="lazy" onClick={gitLinkFunction} src={profile_img} alt="" />
            </div>
            <h1><span>Kunal Roy</span></h1>
            <p></p>
            <div className="Hero-action">
                <div className="Hero-connect"><AnchorLink className='anchor-list' offset={50} href='#contactId'>Connect With Me</AnchorLink></div>
                <div onClick={handleResumeView} className="Hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero