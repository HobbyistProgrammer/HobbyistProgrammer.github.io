import React from 'react';
import './Project.css';
import calc_view from '../assets/calculator_view.png';
import calc_compute from '../assets/calculator_compute.png';

const Project = () => {
  return (
    <>
        <h2>Experience</h2>
        <p>
            Academic projects can be found on my github, my main academic experience working on various projects include:
        </p>
        <ul>
            <li>Completing various SRS document related to project management</li>
            <br />
            <li>
                BookSwap - A mobile application that allowed users to create book listings, view book listings, and request book. <br/>
                This app was created to scan ISBN numbers on books and retrieve related data from a library API. <br />
                Entered/retrieved information about book listings would be obtained/retrieved from a PostGreSQL database. <br />
                My contribution to this project was the frontend UI, barcode camera scan, and library API retrieval.
            </li>
            <br />
            <li>
                SneakIn - A web application that allows business owners to check daily/monthly/yearly invoices, reports, and market prices for items. <br />
                This app was created using Typescript XML as well as leveraging Amazon RDS AWS to store information. <br />
                My own contribution to the project was establishing the connection between the amazon AWS database and the interative UI frontend, as well as updating frontend UI format. <br />
                This project can be downloaded here: <a href="/projects/SneakIn.zip" download="SneakIn.zip">SneakIn App Download</a><br />
            </li>
            <br />
            <li>
                Simple Calculator - A JavaFX application that allows users to compute simple math calculations. <br />
                This app was created using Java and JavaFX that demonstrates knowledge with UX principles and event-driven operations. <br />
                This project can be visited on my GitHub or downloaded here: <a href="/projects/Calculator.zip" download="Calculator.zip">Calculator App Download</a><br />
            </li>
            <img src={calc_view} alt="Calculator View"/>
            <img src={calc_compute} alt="Calculator Compute"/>
        </ul>
        <p>
            I've worked on various projects that include developing web applications, analyzing data, and 
            implementing machine learning models. My hands-on experience has provided me with a solid foundation 
            in programming and software design.  
        </p>
    </>
  );
};

export default Project;