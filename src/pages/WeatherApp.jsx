import React from 'react';
import weatherapp_1 from '../assets/images/weatherapp_1.png';
import weatherapp_2 from '../assets/images/weatherapp_2.png';
import '../styles/WeatherApp.scss';

const WeatherApp = () => {
    return (
        <>
            <div className="container">
                <div className="grid">
                    <img className="weatherapp-img" src={weatherapp_1} alt="weather app pic"/>
                    <img className="weatherapp-img" src={weatherapp_2} alt=""/>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;