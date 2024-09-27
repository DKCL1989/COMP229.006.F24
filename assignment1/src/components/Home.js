import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my website! I am dedicated to providing the best services to my clients.</p>
            <h3>Mission Statment</h3>
            <p>My mission is to deliver high-quality solutions or services that meet your needs and exceed your expectations.</p>
            <img className="Selfie" src={require('./assets/selfie1.jpg')} alt="placeholder" />
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};
export default Home;
