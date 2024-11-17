import React from 'react';
import "../styles/globals.css"


interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    demoLink: string;
    repoLink: string;
    imageSrc?: string; // Add an optional imageSrc prop for the project image
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, demoLink, repoLink, imageSrc }) => (
    <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Display the image if imageSrc is provided */}
        {imageSrc && <img src={imageSrc} alt={`${title} preview`} className="project-image" />}
        <p>{techStack.join(', ')}</p>
        <div>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </div>
);

export default ProjectCard;
