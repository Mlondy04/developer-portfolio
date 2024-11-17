import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "../styles/globals.css";

const Header: React.FC = () => (
    <header className="header">
        <h1>Mlondy Madida</h1>
        <p>Full-Stack Developer</p>
        <div className="socials">
            <a href="https://github.com/Mlondy04" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mlondy-madida-1160a8291/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="mlondy.madida@icloud.com">
                <FaEnvelope />
            </a>
        </div>
    </header>
);

export default Header;
