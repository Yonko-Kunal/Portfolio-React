import React from 'react'
import './Project.css'
import myProjects from '../../assets/project-data'

const Project = () => {
    return (
        <div id='projectId' className='project'>
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="project-container">
                {myProjects.map((work, index) => {
                    return <img onClick={() => window.open(work.w_link, '_blank')} key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="show-more-projects">
                <p>Show More</p>
            </div>

        </div>
    )
}

export default Project