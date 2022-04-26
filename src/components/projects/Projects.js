import React from 'react'
import "./Projects.css"
import Cards from './Cards'

function Projects() {
  return (
    <div className='projects-container'>
        <h2>Projects I've worked on</h2>

        <div className="projects-grid">
          <Cards title="Netflix Redesign" siteImg="./netflix.png" link="https://google.com"/>
          <Cards title="Hogar" siteImg="./hogar.png" link="https://samueljr3.github.io/code4Justice/"/>
          <Cards title="Project 3" siteImg="./netflix.png" link="https://google.com"/>
          <Cards title="Project 4" siteImg="./netflix.png" link="https://google.com"/>
        </div>
    </div>
  )
}

export default Projects