import React from 'react'
import Project from './Project'
import { projects } from '../lib/data'

const Projects = () => {

    return (
        <section className="section section--projects">
            <div className="container">
                <span id="projects" className="is-visually-hidden" style={{ top: '-80px' }}>&nbsp;</span>

                <div className="section__wrapper">

                    <h2 className="section__title">projects</h2>

                    <div className="section__projects">
                        {projects.length > 0 && projects.map((project, index) => (
                            <Project key={index} project={project} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects
