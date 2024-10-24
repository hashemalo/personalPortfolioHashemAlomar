import React from 'react';
import './index.scss'; // You'll create this file for styling
import {Helmet} from 'react-helmet';
const Projects = () => {
  const projects = [
    {
      title: "This Website!",
      description: "I made this website during my first semester in college as a learning experience for front end web dev.",
      githubLink: "https://github.com/hashemalo/personalPortfolioHashemAlomar"
    },
    {
      title: "AI Chatbot TBD",
      description: "Working on it...",
      githubLink: ""
    },
    {
        title: "Deep Learning Handwriting Prescriber",
        description: "Working on it..",
        githubLink: ""
    },
    
    // Add more projects as needed
  ];
  return (
    
    <div className="projects-page">
      <Helmet>
        <title>HA - Projects</title>
        <meta name="description" content="View my portfolio of projects" />
      </Helmet>

      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;