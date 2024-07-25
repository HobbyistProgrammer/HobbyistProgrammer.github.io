import React from 'react';
import './homepage.css'; // Create a separate CSS file for styles

const HomePage = () => {
  return (
    <div className="home-page">
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>COMP303 - 401</title>
      </head>
      <header>
        <h1>Welcome To My COMP303 - 401 Spring Web Page</h1>
        <h3>Navigate the pages through the links below:</h3>
        <table className="navigation-table">
          <tbody>
            <tr>
              <td>
                <a className="nav-link" href="/">Home</a>
              </td>
              <td>
                <a className="nav-link" href="/airline">Final Exam</a>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
      <body style={{ backgroundColor: 'antiquewhite' }}>
        <table>
          <tbody>
            <tr>
              <td>
                <img src="/images/me.png" alt="Profile" />
              </td>
            </tr>
            <tr>
              <td>
                <h3>About Me:</h3>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  This webpage is used to display my experience in COMP303 with Springboot and Thymeleaf.
                  I am currently in my 3rd year in the Software Engineering Technology
                  program.
                  I am currently enrolled in the following 6 courses:
                </p>
                <ul>
                  <li>COMP321</li>
                  <li>COMP367</li>
                  <li>COMP308</li>
                  <li>COMP303</li>
                  <li>COMP231</li>
                  <li>CNET307</li>
                </ul>
                <p>
                  I am hoping to learn a lot from these courses this semester, as well as
                  to be able to find my 3rd work term co-op for the summer semester.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      <footer>
        <h3>Benton Le - 301174103</h3>
      </footer>
    </div>
  );
};

export default HomePage;
