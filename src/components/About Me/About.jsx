import React from 'react'
import './About.css'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id='about'>
      <h5> Get To know</h5>
      <h2>About Me</h2>

      <div className='container' about_container>
        <div className='about_me'>
          <div className='about_me-image'>
           
          </div>
          
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'> 
            <FaAward className='about_icon' /> 
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'> 
            <FiUsers className='about_icon' /> 
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className='about_card'> 
            <VscFolderLibrary className='about_icon' /> 
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>
          </div>
          <p>
          Hello! I'm <b>Oladapo Ayomide</b>, a passionate web developer. 
          I specialize in creating dynamic and responsive web applications using technologies 
          such as React, Node.js, JavaScript, HTML5, and CSS3.
            I possess a deep understanding of web development principles,
             including front-end and back-end development. My passion for delivering high-quality, 
             user-centric experiences has earned me a reputation as a reliable and skilled developer.<br/>
              I'm always improving myself day by day to become an expert.<br/>
                                    #Mosimajubayilo
          </p>
          <a href='#contact' className='btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About