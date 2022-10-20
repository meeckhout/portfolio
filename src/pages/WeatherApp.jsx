import React from 'react';
import weatherapp_1 from '../assets/images/weatherapp_1.png';
import weatherapp_2 from '../assets/images/weatherapp_2.png';
import '../styles/WeatherApp.scss';

const WeatherApp = () => {
    return (
        <>
            <div className="container-weather">
                <div className="flex">
                    <img className="weatherapp-img" src={weatherapp_1} alt="weather app pic"/>
                    <img className="weatherapp-img" src={weatherapp_2} alt=""/>
                </div>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                    width="77%"
                    height="500"
                    src="data:text/html;charset=utf-8,
                        <head><base target='_blank' /></head>
                        <body><script src='https://gist.github.com/meeckhout/ce003897f1444c13603f254ff71dbb5a.js'></script>
                        </body>"
                    />
                <div className="link-project">
                    <span className="project-txt">
                        View project on
                        <a className="link-github" href="https://github.com/meeckhout/weatherapp">
                            Github
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;