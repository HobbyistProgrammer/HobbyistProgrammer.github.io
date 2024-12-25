import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="greeting-page">
      <div className="content-wrapper">
        <div className="info-section">
          <p className="tagline">Software Engineering Technology Student</p>
          <p className="description">
            I'm a passionate third-year student at Centennial College, specializing in software development. I am eager to contribute my skills in various technologies like Java, Python, and web development to create meaningful software solutions.
          </p>

          <section className="skills">
            <h2>Skills & Expertise</h2>
            <ul>
              <li>Programming Languages: Java, Python (Machine Learning), C#, C/C++, JavaScript</li>
              <li>Web Development: React, Node.js</li>
              <li>Backend Technologies: VB .NET, VB Web API</li>
              <li>Database Management: NoSQL, PostgreSQL, MongoDB, MySQL</li>
              <li>Cloud & Web Services: Google Apigee, Firebase, AWS</li>
              <li>Software Development: JavaFX, Visual Studio (for UI implementation)</li>
            </ul>
            <h3>Soft Skills</h3>
            <ul>
              <li>Leadership: Led vaarious team projects and led/coordinated sub-teams in recent co-op</li>
              <li>Teamwork: Worked collaboratively in cross-functional teams to present daily tasks and complete assigned milestones</li>
              <li>Project Management: Experienced with Agile methodologies, Scrum, and Jira</li>
            </ul>
          </section>



          <section className="education">
            <h2>Education</h2>
            <ul>
              <li>
                <h3>Centennial College - Software Engineering Technology</h3>
                <p>Graduation: December 2024 | GPA: 4.0 / 4.5</p>
              </li>
              <li>
                <h3>Seneca College - Computer Programming & Analysis</h3>
                <p>September 2016 - December 2019</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
