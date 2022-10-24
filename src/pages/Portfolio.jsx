import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Portfolio.scss';
import weatherapp_1 from '../assets/images/weatherapp_1.png';
import Design_Landing_V2 from '../assets/images/Design_Landing_V2.png';

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
                        <span className="project-title">NSN Messenger</span>
                        <img className="work_2" src={Design_Landing_V2} alt="nsn messenger pic"/>
                        <nav>
                            <Link to="/nsn">See more</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
