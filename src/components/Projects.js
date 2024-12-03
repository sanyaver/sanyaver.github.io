import React from 'react';
// import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-item">
                <h3>Project 1</h3>
                <p>A brief description of the project.</p>
                <a href="https://github.com/your-project-link">View on GitHub</a>
            </div>
            <div className="project-item">
                <h3>Project 2</h3>
                <p>A brief description of the project.</p>
                <a href="https://github.com/your-project-link">View on GitHub</a>
            </div>
        </div>
    );
}

export default Projects;
