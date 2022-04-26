import React, {useState, useEffect} from 'react'
import "./Cards.css"

function Cards({title, siteImg,link}) {
  return (
    <div className='card'>
        <img src={siteImg} alt="site1"/>
        <h3>{title}</h3>
        <a target="_blank" rel="noreferrer" href={link}>Visit Site</a>
    </div>
  )
}

export default Cards