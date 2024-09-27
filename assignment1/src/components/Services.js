import React from 'react';
import HRServicesImage from './assets/HRservices.jpg';
import WebDesignServicesImage from './assets/webdesignservices.jpg';
import GeneralProgrammingImage from './assets/programmingservices.jpg';
//File Name: Services.js
//Student's Name: Ka Chuen David LEE
//StudentID: 301389811
//Date: September 27, 2024

const Services = () => {
  const services = [
    {
      title: "HR Services",
      description: "My comprehensive HR exepriences and services cover all aspects of human resource management. From recruitment and onboarding to performance management and employee relations, I provide tailored solutions to help your organization build and maintain a strong, engaged workforce.",
      image: HRServicesImage
    },
    {
      title: "Webpage Design",
      description: "I can create stunning, responsive websites that capture your brand's essence and engage your audience. My web design services combine aesthetics with functionality, ensuring a seamless user experience across all devices. From simple landing pages to complex e-commerce sites, I can bring your digital vision to life.",
      image: WebDesignServicesImage
    },
    {
      title: "General Programming",
      description: "My skilled programming knowledge can offer versatile software development services. Whether you need custom software solutions, mobile app development, or integration of existing systems, I can deliver robust, scalable, and efficient code. I can work with a wide range of programming languages and frameworks to meet your specific needs.",
      image: GeneralProgrammingImage
    }
  ];

  return (
    <div className="container">
      <h1>My Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;