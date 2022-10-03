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
            <div className="html">
                <span className="bar-title">HTML</span>
                <progress id="health" value="80" max="100"></progress>
            </div>

            <div className="scss">
                <span className="bar-title">SCSS</span>
                <progress id="health" value="85" max="100"></progress>
            </div>

            <div className="js">
                <span className="bar-title">JavaScript</span>
                <progress id="health" value="70" max="100"></progress>
            </div>

            <div className="react">
                <span className="bar-title">React</span>
                <progress id="health" value="60" max="100"></progress>
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