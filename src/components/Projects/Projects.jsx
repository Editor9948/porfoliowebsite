import React from 'react';
import './Projects.css';
import { projectsData } from './ProjectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <section id='projects' className='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects_container'>
        <div className='projects_grid'>
          {projectsData.map(project => (
            <article key={project.id} className='project_card'>
              <div className='project_image_container'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='project_image'
                />
              </div>
              
              <h3 className='project_title'>{project.title}</h3>
              <p className='project_description'>{project.description}</p>
              
              <div className='project_technologies'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='tech_tag'>{tech}</span>
                ))}
              </div>
              
              <div className='project_links'>
                <a 
                  href={project.github} 
                  className='project_link github'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub /> GitHub
                </a>
                <a 
                  href={project.demo} 
                  className='project_link demo'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
