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

                </div>
            </div>
        </>
    )
}

export default WeatherApp;