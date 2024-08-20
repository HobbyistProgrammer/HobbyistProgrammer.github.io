import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Just a brief introduction about myself: <br />
        I am a passionate Software Engineering Technology student in my third year at Centennial College, set to graduate in fall 2024.
      </p>
      <p>
        I have a strong background and interest in:
      </p>
      <ul>
        <li>Java</li>
        <li>Python - Machine Learning</li>
        <li>Web Development</li>
        <li>UI & UX Design</li>
        <li>C++/C#</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          <h3>Centennial College - Software Engineering Technology</h3>
          <p>Graduation Date: December 2024</p>
          <ul>
            <li>GPA: 4.0 / 4.5</li>
            <li>Currently pursuing an Advanced Diploma in Software Engineering Technology, equipping me with a deep understanding of software development processes and system analysis.</li>
          </ul>
        </li>
        <li>
          <h3>Seneca College - Computer Programming & Analysis</h3>
          <p>September 2016 - December 2019</p>
        </li>
      </ul>

      <h2>Hobbies & Interests</h2>
      <p>
        I am currently self-learning how to create a game in Unity and use Blender to create models. 
        I am also currently working on a few projects to display my knowledge in Java, UI design, and Web Development.
        <br />
        My other hobbies include cooking, going for walks in a park/lake, and going to the gym.
      </p>

      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via <a href="mailto:benton.le@hotmail.com" target="_blank">benton.le@hotmail.com</a> <br />
          or connect with me on <a href="https://www.linkedin.com/in/benton-le" target="_blank">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
