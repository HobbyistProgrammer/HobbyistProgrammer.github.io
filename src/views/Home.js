import React from 'react';
import './Home.css';
import myImage from '../assets/me.jpg';

const Greeting = () => {
  return (
    <div className="greeting-page">
      <div className="content-wrapper">
        <div className="image-section">
          <img src={myImage} alt="Me" />
        </div>
        <div className="info-section">
          <h1>Benton Le</h1>
          <p className="tagline">Software Engineer | Full-Stack Developer | Machine Learning Enthusiast</p>
          <p className="description">
            Welcome! I'm a dedicated software engineer with a passion for crafting innovative applications.
            This site showcases my expertise and the projects I'm currently working on or have completed.
            Feel free to explore my portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
