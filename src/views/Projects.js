import React from 'react';
import './Project.css';
import github_icon from '../assets/github_icon.png';
import redirect_icon from '../assets/redirect_icon.png';

const Project = () => {
    const handleCardClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <h2>Experience</h2>
            <p>More academic projects can be found on my GitHub. Showcasing my main academic experiences working on various projects:</p>
            <div className="project-container">
                <div className="project-card" onClick={() => handleCardClick('https://drive.google.com/file/d/1Zgev6vMJY9d7Q87S_AorEurInFTZBwfp/view')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>SneakIn</h3>
                    <p>
                        A web application that allows business owners to check invoices, reports, and market prices for items.
                        Application is developed using Amazon AWS S2, and Typescript XML.
                        My contributions: AWS database connections and frontend UI connectivity.
                    </p>
                </div>

                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/COMP308---Group-Project')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Healthcare Monitoring App</h3>
                    <p>
                        A web application for nurses and patients to manage health data, play fitness games, and check symptoms.
                        This was completed using React and micro-servers and micro-frontends.
                        My Contributions: development of UI and database creation and connections.
                    </p>
                </div>

                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/Calculator')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Simple Calculator</h3>
                    <p>A JavaFX app for basic arithmetic and complex calculations.</p>
                </div>

                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/MacrosHealthApp')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Macros Calender Tracking App</h3>
                    <p>A JavaFX app for tracking nutrition information using the Spoonacular API and MySQL.</p>
                </div>
            </div>
            <h2>Additional Project Completed (Coding Challenges)</h2>
            <div className="project-container">
                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/Hireup_FAQ')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Responsive FAQ Page - Hireup Challenge</h3>
                    <p>
                        A responsive single-file Next.js FAQ page with functional search bar, 
                        that lists predefined questions and answers, with expand/collapse all features.
                    </p>
                </div>
                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/Hireup_StopWatch')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Stop Watch App - Hireup Challenge</h3>
                    <p>
                        A Java and Swing single-file stopwatch application with start, stop and reset functionality, 
                        and real-time updates for smooth performance.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Project;
