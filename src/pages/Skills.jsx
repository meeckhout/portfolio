import React from 'react';
import '../styles/Skills.scss';
import {FaReact, FaHtml5, FaSass, FaGit} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign} from 'react-icons/si';
import {FiFigma} from 'react-icons/fi';
import {AiOutlineSketch} from 'react-icons/ai';


const Skills = () => {
    return (
        <>
        <div className="container-skills">
            <div className="grid">
                <div className="web">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/6509/6509766.png" alt ="code" />
                    <span className="skills-title">Web Dev (front end)</span>
                    <span className="skills-txt">
                        Working with html, scss, js and React, using css frameworks like Tailwind and Bootstrap.
                        Using git (command line) and npm. Basic back end knowledge: php, laravel, mysql.
                    </span>
                </div>
                <div className="design">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/6509/6509766.png" alt ="code" />
                    <span className="skills-title">Web Design</span>
                    <span className="skills-txt">
                        Creating wireframes and mock-ups using Figma or Sketch. Using scss to create custom web design.

                    </span>
                </div>
                <div className="ui">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/6509/6509766.png" alt ="code" />
                    <span className="skills-title">UI/UX</span>
                    <span className="skills-txt">

                    </span>
                </div>
                <div className="tbc">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/6509/6509766.png" alt ="code" />
                    <span className="skills-title">Something</span>
                    <span className="skills-txt">
                        Working with html, scss, js and React, using css frameworks like Tailwind and Bootstrap.
                        Using git (command line) and npm. Basic back end knowledge: php, laravel, mysql.
                    </span>
                </div>
            </div>

            <div className="logos">
                <FaHtml5 />
                <FaSass />
                <IoLogoJavascript />
                <FaReact />

                <SiAdobephotoshop />
                <SiAdobeillustrator />
                <SiAdobeindesign />
                <FiFigma />
                <AiOutlineSketch />

                <FaGit />
            </div>
        </div>
        </>
    );
};

export default Skills;