import React from 'react';
import Header from '../app/components/header';
import Projects from '../app/components/Projects';
import Skills from '../app/components/Skills';
import Footer from '../app/components/Footer';
import "./styles/globals.css";

const Home: React.FC = () => (
    <div className="app">
        <Header />
        <Projects />
        <Skills />
        <Footer />
    </div>
);

export default Home;
