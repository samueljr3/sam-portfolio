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
          <Cards title="Sugoi Ecommerce" siteImg="./sugoi.png" link="https://sam-sugoi-ecommerce.herokuapp.com/"/>
          <Cards title="Gateway Project" siteImg="./gateway.png" link="https://el-salv-site.samueljr3.repl.co/index.html"/>
        </div>
        <hr></hr>
    </div>
  )
}

export default Projects