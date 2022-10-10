import React from 'react';
import weatherapp_1 from '../assets/images/weatherapp_1.png';
import weatherapp_2 from '../assets/images/weatherapp_2.png';
import Ghent from '../assets/images/Ghent.png';
import thecityof from '../assets/images/thecityof.png';
import font_title from '../assets/images/font_title.png';
import '../styles/WeatherApp.scss';

const WeatherApp = () => {
    return (
        <>
            <div className="container">
                <div className="flex">
                    <img className="weatherapp-img" src={weatherapp_1} alt="weather app pic"/>
                    <img className="weatherapp-img" src={weatherapp_2} alt=""/>

                    <span>Design Process</span>
                    <span className="text-project">
                        <img src={thecityof} alt="The City of"/>
                        <span className="explanation">
                        <img src={font_title} alt="font title"/>
                        </span>
                        <img src={Ghent} alt="Ghent"/>
                    </span>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;