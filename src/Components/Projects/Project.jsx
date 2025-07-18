import React from 'react'
import './Project.css'
import myProjects from '../../assets/project-data'

const Project = () => {

    const gitLinkFunction = () => {
        window.open('https://github.com/Yonko-Kunal?tab=repositories', '_blank')
    }

    return (
        <div id='projectId' className='project'>
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="project-container">
                {myProjects.map((work, index) => {
                    return <img className={`div${index + 1}`} loading='lazy' onClick={() => window.open(work.w_link, '_blank')} key={index} src={work.w_img} alt="" />
                })}
            </div>

            <div className="show-more-projects" onClick={gitLinkFunction}>
                <p>Repositories</p>
            </div>

        </div>
    )
}

export default Project