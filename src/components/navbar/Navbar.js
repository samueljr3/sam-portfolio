import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
        {/* <ul className = "Navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul> */}
        <ul className = "Navbar">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <hr></hr>
    </>
  )
}

export default Navbar