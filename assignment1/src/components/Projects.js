import React from 'react';
import GUIcalculatorImage from './assets/GUIcalculator.jpg';
import WebDesignImage from './assets/webdesign.jpg';
import HiringImage from './assets/hiring.jpg';
//File Name: Projects.js
//Student's Name: Ka Chuen David LEE
//StudentID: 301389811
//Date: September 27, 2024

const Projects = () => {
  const projects = [
    {
      title: "GUI Calculator",
      description: "My previous projects include a C# calculator that can perform basic arithmetic operations. I can develop custom software solutions that meet your specific requirements and deliver a seamless user experience. Whether you need a simple calculator or a complex application, I can create efficient and user-friendly software that enhances your productivity.",
      image: GUIcalculatorImage
    },
    {
      title: "Student Homepage Design",
      description: "My course projects include designing a student homepage that showcases my skills and accomplishments. I can create visually appealing and functional websites that reflect your brand and engage your audience. Whether you need a personal portfolio or a business website, I can design a custom site that meets your needs and exceeds your expectations.",
      image: WebDesignImage
    },
    {
      title: "Recruitment of Temporary Venue Helpers",
      description: "My previous work experience in Hong Kong which works for the LCSD, which is similar to the Parks, Forestry & Recreation of Toronto. My jobs were to recruit temporary venue helpers for the venues held by the LCSD, like parks, stadium, sports complex, etc. I can provide HR services that cover all aspects of human resource management, from recruitment and onboarding to performance management and employee relations. I can help your organization build and maintain a strong, engaged workforce that drives your success.",
      image: HiringImage
    }
  ];

  return (
    <div className="container">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;