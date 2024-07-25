import React from 'react';
import './Greeting.css';

const Greeting = ({ isScrolled }) => {
  return (
    <div className={`greeting ${isScrolled ? 'hidden' : ''}`}>
      <h1>Welcome to My Portfolio</h1>
      <h3>
        Hello! My name is Benton Le, an anspiring Software Engineer eager to expand my academic and professional horizons.
        <br></br>
        Scroll down to discover more about my background and experiences.
      </h3>
    </div>
  );
};

export default Greeting;