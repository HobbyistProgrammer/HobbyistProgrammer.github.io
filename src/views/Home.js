import React from 'react';
import './Home.css';
import myImage from '../assets/placeholder.png';

const Greeting = () => {
  return (
    <div className="greeting-container">
      <div className="greeting-content">
        <div className="info">
          <h1>Software Engineer | Full-Stack Developer | Machine Learning Enthusiast</h1>
          <h3>
            Welcome! I'm Benton Le, a dedicated software engineer with a passion for crafting innovative applications.
            <br />
            This site showcases my diverse expertise and the projects that I am currently working on or worked on.
            <br />
            Feel free to scroll down to explore my background, experiences, or to learn more about me.
            <br />
          </h3>
        </div>
        <div className="image-container">
          <img src={myImage} alt="Me" />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
