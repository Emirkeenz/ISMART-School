import React from "react";
import './Banner.css'
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <video autoPlay muted loop className="video-bg">
        <source src={require('../../assets/stem-education.mp4')} type="video/mp4"/>
      </video>
      <div className="home-text">
          <h1>ISMART</h1>
          <p>Gateway to the bright future</p>
      </div>
      <div className="home-btn"><Link to={`https://www.ismart.org/`} style={{textDecoration:'none', color:'white'}}>Explore</Link></div>
      <div className="bg-overlay"></div>
    </div>
  )
}

export default Landingpage;