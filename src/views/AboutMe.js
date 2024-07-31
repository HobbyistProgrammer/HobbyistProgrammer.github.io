import React from 'react';
import './AboutMe.css';

const Introduction = () => {

  return (
    <>
      <h1>About Me</h1>
      <p>
        Just a brief reintroductory about myself:<br />
        I am a passionate Software Engineering Technology student in my third year at Centennial College and am set to graduate fall 2024<br />
        I have a strong background and interest in:
      </p>
      <ul>
        <li>Java</li>
        <li>Python - Machine Learning</li>
        <li>Web Development</li>
        <li>C++/C#</li>
        <li>Unity</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          <h3>Centennial College - Software Engineering Technology - Graduation Data: December 2024 </h3>
          <ul>
            <li>
              GPA: 4.0 / 4.5
            </li>
            <li>
              Currently pursuing a Advanced Diploma in Software Engineering Technology at Centennial College, which has equipped me with 
              a deep understanding of software development processes and system analysis.
            </li>
          </ul>
        </li>
        <li>
          <h3>Seneca College - Computer Programming & Analysis - September 2016 - December 2019</h3>
        </li>
      </ul>

      <h2>Hobbies & Interests</h2>
      <p>
        Currently self-learning how to create a game in Unity and how to use Blender to create models. My other side projects currently is trying to create
        a basic/scientific calculator (switchable) as a programming hobby.
        <br></br>
        My other hobbies entail me cooking and going outdoors to parks or lakes for a walk.
      </p>

      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via <a href="mailto:benton.le@hotmail.com">benton.le@hotmail.com</a><br></br>
          or connect with me on <a href="https://www.linkedin.com/in/benton-le">https://www.linkedin.com/in/benton-le</a>
        </p>
      </div>
    </>
  );
};

export default Introduction;
