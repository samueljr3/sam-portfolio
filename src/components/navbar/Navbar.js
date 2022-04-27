import React from 'react'
import './Navbar.css'

function Navbar() {
  function home(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
  function projects(){
    window.scrollTo({
      top:620,
      behavior:'smooth'
    });
  }
  function contact(){
    window.scrollTo({
      top:1950,
      behavior:'smooth'
    });
  }

  return (
    <div className='Nav-container'>
        <ul className = "Navbar">
            <li onClick={home}>Home</li>
            <li onClick={projects}>Projects</li>
            <li onClick={contact}>Contact</li>
        </ul>
        <hr></hr>
    </div>
  )
}

export default Navbar