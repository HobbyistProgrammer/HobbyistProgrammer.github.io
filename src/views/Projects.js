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
            <p>Explore my key academic and coding challenge projects below. More projects can be found on my <a href="https://github.com/HobbyistProgrammer" target="_blank">GitHub</a>.</p>
            <div className="project-container">
                <div className="project-card" onClick={() => handleCardClick('https://drive.google.com/file/d/1Zgev6vMJY9d7Q87S_AorEurInFTZBwfp/view')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>SneakIn</h3>
                    <p>
                        A web application that empowers business wonders to manage invoices, reports, and market prices.
                        Built with <strong>Amazon AWS S2 and TypeScript XML</strong>.<br/>
                        <strong>My Role:</strong> Implemented AWS database connections and UI Integration.
                    </p>
                </div>
                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/Cloud-based-Movie-Management-Platform')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Cloud-based Movie Management Platform</h3>
                    <p>
                        A scalable movie management web application built with <strong>C#, ASP.NET, and AWS.</strong><br/>
                        <strong>My Role:</strong> Designed and developed the entire application, including API integration, database design, and user interface development.
                    </p>
                </div>
                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/COMP308---Group-Project')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Healthcare Monitoring App</h3>
                    <p>
                        A <strong>React-based web application</strong> designed for nurses and patients to 
                        <strong> track health data</strong>, play <strong>fitness memory games</strong>, and receive <strong>intelligent sympton checker</strong> from a Symptom Checker API.
                        Developed using <strong>React, Vite, JWT Authentication, Microservices, Micro-frontends, CORS, and Mongoose</strong>.<br/>
                        <strong>My Role:</strong> Designed the UI and built thr database architecture using Mongoose, implemented GraphQL for data querying, and configured CORS for secure API interactions.
                    </p>
                </div>
                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/comp313-401-Team4-F24')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>ShovelHero</h3>
                    <p>
                        An <strong>Android mobile application</strong> that allows users to find snow removal users (Youth Shovellers or Adult Shovellers) in their area.<br/>
                        Built with <strong>Java and Android Studio, and integrated with Google Firebase.</strong><br/>
                        <strong>My Role:</strong> Led the design and development of the application, focusing on <strong>Firebase database integration</strong>
                        for real-time data synchonization and user, property, and shoveller information storage.
                        Developed and optimized the <strong>user interface</strong> and integrated <strong>API's</strong> to streamline interactions between users.
                    </p>
                </div> 
                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/COMP306_API_Project')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Product Inventory Management System</h3>
                    <p>
                        A robust <strong>Web API</strong> designed for business owners to manage products and orders efficiently, leveraging <strong>Amazon AWS</strong> for scalability and performance.  
                        <br/><br/>
                        <strong>Tech Stack:</strong> Visual Studio (C#), ASP.NET, Amazon DynamoDB, AWS ECR, AWS ECS (Fargate), Google Apigee.  
                        <br/><br/>
                        <strong>Key Features:</strong>
                        <ul>
                            <li>Implemented a <strong>microservices architecture</strong> using AWS ECS and Fargate for scalable deployment.</li>
                            <li>Utilized <strong>Amazon DynamoDB</strong> for high-performance and fault-tolerant inventory data storage.</li>
                            <li>Integrated <strong>Google Apigee</strong> for secure and efficient API management.</li>
                            <li>Designed a <strong>scalable and secure backend infrastructure</strong>, ensuring seamless API interactions.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <h2>Self-Initiated Projects</h2>
            <div className="project-container">
                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/Calculator')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Simple Calculator</h3>
                    <p>
                        A JavaFX app for basic arithmetic and advanced calculations.<br/>
                        <strong>My Role:</strong> Full-stack development.
                    </p>
                </div>

                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/MacrosHealthApp')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Macros Calender Tracking App</h3>
                    <p>
                        A self-initiated <strong>JavaFX application</strong> designed to track daily nutrition, including proteins, carbs, fats, and calories, 
                        by integrating the <strong>Spoonacular API</strong> and a <strong>MySQL database</strong>.  
                        <br/><br/>
                        <strong>My Role:</strong> Led the full development cycle of the app, including:
                        <ul>
                            <li><strong>API integration</strong> with the Spoonacular API to fetch real-time nutrition data.</li>
                            <li><strong>Database design and management</strong> using MySQL to store and manage daily food intake logs.</li>
                            <li><strong>User interface development</strong> using JavaFX and SceneBuilder for a user-friendly experience.</li>
                        </ul>
                    </p>
                </div>

                <div className="project-card" onClick={() => handleCardClick('https://github.com/HobbyistProgrammer/Movie-Comment-App')}>
                    <img src={redirect_icon} alt="Redirect" className="redirect-icon" />
                    <img src={github_icon} alt="GitHub" className="github-icon" />
                    <h3>Movie Comment Website</h3>
                    <p>
                        A self-initiated <strong>JavaScript + React + Google Firebase</strong> application designed to allow users to comment on movies,
                        and view comments from other users. The application is designed to be user-friendly and responsive, ensuring a seamless experience across devices.
                        <br/><br/>
                        <strong>My Role:</strong> Led the full development cycle of the web app, including:
                        <ul>
                            <li><strong>UI design and development</strong> using React, CSS, and Tailwind CSS for a responsive layout.</li>
                            <li><strong>Database integration</strong> with Google Firebase for real-time data storage and retrieval.</li>
                            <li><strong>Followed best practices for web security</strong>, including CORS policies, input validation, and token expiration.</li>
                            <li><strong>User Authentication</strong> with JWT tokens stored in HTTP-only cookies for enhanced security.</li>
                        </ul>
                    </p>
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
