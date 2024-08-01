import React from 'react';
import './Project.css';
import calc_view from '../assets/calculator_view.png';
import calc_compute from '../assets/calculator_compute.png';

const Project = () => {
  return (
    <>
      <h2>Experience</h2>
      <p>More academic projects can be found on my GitHub. Showcasing my main academic experiences working on various projects:</p>
      <div className="project-item">
        <h3>BookSwap</h3>
        <p>A mobile application that allows users to create book listings, view book listings, and request books.</p>
        <ul>
          <li>Scans ISBN numbers on books and retrieves related data from a library API.</li>
          <li>Uses a PostgreSQL database for book listing information.</li>
          <li>My contribution: frontend UI, barcode camera scan, and library API retrieval.</li>
        </ul>
      </div>
      
      <div className="project-item">
        <h3>SneakIn</h3>
        <p>A web application that allows business owners to check invoices, reports, and market prices for items.</p>
        <ul>
          <li>Uses Typescript XML and Amazon RDS AWS for storage.</li>
          <li>My contribution: AWS database connection and frontend UI updates.</li>
        </ul>
        <a href="/projects/SneakIn.zip" download="SneakIn.zip" className="download-button">SneakIn App Download</a>
      </div>

      <div className="project-item">
        <h3>Simple Calculator</h3>
        <p>A JavaFX application that allows users to perform simple math calculations.</p>
        <ul>
          <li>Created using Java and JavaFX, demonstrating UX principles and event-driven operations.</li>
          <li>Includes features for basic arithmetic and more complex calculations.</li>
        </ul>
        <div className="project-images">
          <img src={calc_view} alt="Calculator View"/>
          <img src={calc_compute} alt="Calculator Compute"/>
        </div>
        <a href="/projects/Calculator.zip" download="Calculator.zip" className="download-button">Calculator App Download</a>
      </div>
    </>
  );
};

export default Project;
