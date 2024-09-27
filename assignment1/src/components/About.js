import React from 'react';
//File Name: About.js
//Student's Name: Ka Chuen David LEE
//StudentID: 301389811
//Date: September 27, 2024

const About = () => {
  return (
    <div className="container">
      <h1 className="header">About Me</h1>
      <div className="flex-container">
        <div className="image-container">
          <img
            src={require('./assets/selfie2.jpg')} 
            alt="David LEE"
            className="smaller-photo"
          />
        </div>
        <div>
          <p>
            Hi, My name is Ka Chuen David LEE. I come from Hong Kong and previously worked in the Government sector.
        </p><p>
            I currently study at Centennial College in the Software Engineering Technician program.
            </p><p> 
            I am passionate about web development and programming and I believe my strong knowledge in HR combined with computer sciences could bring a lot of benefits to me and my future employer.
          </p>
          <a href="https://drive.google.com/file/d/1qNcP-4PslKqsl7xUdsE1DBXradsv1P3_/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="resume-link">
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;