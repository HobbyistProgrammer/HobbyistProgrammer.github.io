import React from 'react';
import './Home.css';
import myImage from '../assets/placeholder.png';

const Greeting = () => {
  return (
    <div className="greeting">
      <table className="greeting-table">
        <tbody>
          <tr>
            <td className="text-section">
              <h1>Software Engineer | Full-Stack Developer | Machine Learning Enthusiast</h1>
              <h3>
                Welcome! I'm Benton Le, a dedicated software engineer with a passion for crafting innovative solutions. 
                <br />
                This site showcases my diverse expertise and the projects I’m excited about.
                <br />
                Feel free to scroll down to explore my background, experiences, and the impact I've made in various fields.
                <br />
                If you have any questions or would like to connect, don't hesitate to reach out!
              </h3>
            </td>
            <td className="image-section">
              <img src={myImage} alt="Placeholder image" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Greeting;
