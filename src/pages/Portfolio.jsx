import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Portfolio.scss';
import weatherapp_1 from '../assets/images/weatherapp_1.png';

const Portfolio = () => {
    return (
        <>
            <div className="container">
                <div className="grid">
                    <div className="work">
                        <span className="project-title">Weather App</span>
                        <img className="work_1" src={weatherapp_1} alt="weather app pic"/>
                        <nav>
                            <Link to="/weatherapp">See more</Link>
                        </nav>
                    </div>
                    <div className="work">
                        <span className="project-title">Second Project</span>
                        <img className="work_1" src={weatherapp_1} alt="weather app pic"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
