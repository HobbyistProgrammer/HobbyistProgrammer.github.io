import React from 'react';
import './AboutMe.css';

const Introduction = () => {

  return (
    <>
      <h1>About Me</h1>
      <p>
        Hi! I'm Benton Le, a passionate Software Engineering Technology student in my third year, and set to graduate fall 2024<br></br>
        I have a strong background and interest in:
      </p>
      <ul>
        <li>Java</li>
        <li>Python - Machine Learning</li>
        <li>Web Development</li>
        <li>C++/C#</li>
      </ul>
      <h2>Experience</h2>
      <p>
        Projects can be found on my github, my main academic experience working on various projects include:
      </p>
      <ul>
        <li>Completing various SRS document related to project management</li>
        <li>
          BookSwap - A mobile application that allowed users to create book listings, view book listings, and request book.
          <br></br>This app was created to scan ISBN numbers on books and retrieve related data from a library API.
          <br></br>Entered/retrieved information about book listings would be obtained/retrieved from a PostGreSQL database.
        </li>
        <li>
          SneakIn - A web application that allows business owners to check daily/monthly/yearly invoices, reports, and market prices for items.
          <br></br>This app was created using Typescript XML as well as Amazon RDS AWS to store information.
          <br></br>My own contribution to the project was creating the connection between front end and back end, as well as updating frontend UI
          <br></br>
        </li>
      </ul>
      <p>
        I've worked on various projects that include developing web applications, analyzing data, and 
        implementing machine learning models. My hands-on experience has provided me with a solid foundation 
        in programming and software design.  
      </p>
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
