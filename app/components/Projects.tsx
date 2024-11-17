import React from 'react';
import ProjectCard from './ProjectCard';
import "../styles/globals.css"

const Projects: React.FC = () => (
    <section className="section">
        <h2 className="section-title">Projects</h2>
        <div>
            <ProjectCard
                title="ToDo App"
                description="A full-stack to-do application with Spring Boot and MySQL."
                techStack={["Spring Boot", "MySQL", "Docker", "Thymeleaf"]}
                demoLink="#"
                repoLink="https://github.com/Mlondy04/todoApp"
                imageSrc="/Screenshot_12-11-2024_152946_localhost.jpeg" 
            />
            <ProjectCard
                title="Chat App"
                description="A full-stack chat application with websockets"
                techStack={["Spring Boot", "STOMPJS", "Docker", "Thymeleaf", "SOCKJS", "Kubernetes"]}
                demoLink="#"
                repoLink="https://github.com/Mlondy04/chatApp"
                imageSrc="/Screenshot 2024-11-17 091524.png" 
            />
            <ProjectCard
                title="User Auth System"
                description="A full-stack user authentication system with OAUTH2, 2FA authentication"
                techStack={["Nextjs 14", "Mongodb", "Tailwind css", "Prisma", "Nodemail"]}
                demoLink="#"
                repoLink="https://github.com/Mlondy04/Next_Authv5"
                imageSrc="/Screenshot_17-11-2024_151238_localhost.jpeg" 
            />
            {/* Add more ProjectCard components as needed */}
        </div>
    </section>
);

export default Projects;
