import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="hero-heading">
          <span>Hello, This is</span>
          <span className="hero-name"> Samuel Rivas Ramirez</span>
        </h1>
        <div>
          <img className="hero-img" src="./sam.jpg" alt="me" />
        </div>
        <div className="hero-info">
          <p>
            A result-driven and adaptable coding apprentice who aims to help
            innovate while also actively learning new skills.
          </p>
          <br></br>
          <p>————————</p>
        </div>
        <div className="hero-scrolldown">
          <p>Scroll</p>
          <p className="hero-arrow">⟶</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
