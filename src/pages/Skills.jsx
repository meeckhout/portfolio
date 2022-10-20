import React from 'react';
import '../styles/Skills.scss';
import {FaReact, FaHtml5, FaSass, FaGit, FaBootstrap, FaSmileBeam, FaCat} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiTailwindcss} from 'react-icons/si';
import {FiFigma} from 'react-icons/fi';
import {AiOutlineSketch} from 'react-icons/ai';
import {BsCodeSlash} from 'react-icons/bs';
import {MdOutlineDesignServices} from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';

const Skills = () => {
    return (
        <>
        <div className="container-skills">
            <div className="grid">
                <div className="web">
                    <div className="icon-top">
                        <BsCodeSlash />
                    </div>
                    <span className="skills-title">Web Dev (front end)</span>
                    <div className="logos">
                        <FaHtml5 />
                        <FaSass />
                        <IoLogoJavascript />
                        <FaReact />
                        <SiTailwindcss />
                        <FaBootstrap />
                        <FaGit />
                    </div>
                    <span className="skills-txt">
                        Working with html, scss, js and React, using css frameworks like Tailwind and Bootstrap.
                        Using git (command line) and npm.
                        Basic back end knowledge: php, laravel, mysql.
                    </span>
                </div>
                <div className="design">
                    <div className="icon-top">
                        <MdOutlineDesignServices />
                    </div>
                    <span className="skills-title">Web Design</span>
                    <div className="logos">
                        <SiAdobephotoshop />
                        <SiAdobeillustrator />
                        <SiAdobeindesign />
                        <FiFigma />
                        <AiOutlineSketch />
                    </div>
                    <span className="skills-txt">
                        Creating wireframes and mock-ups using Figma or Sketch. Using scss and js to create custom web design.
                    </span>
                </div>
                <div className="ui">
                    <div className="icon-top">
                        <HiUserGroup />
                    </div>
                    <span className="skills-title">UX/UI</span>
                    <span className="skills-txt">
                        Making everything as easy and user-friendly as possible.
                        Currently following a Google UX/UI course to level up my skills.
                    </span>
                </div>
                <div className="tbc">
                    <div className="icon-top">
                        <FaCat />
                    </div>
                    <span className="skills-title">Soft skills</span>
                    <span className="skills-txt">
                         Big believer in communication. Big fan of creativity. Willing to learn and grow.
                        Gets along well with others. Lame sense of humour.
                        <span className="logos">
                            <FaSmileBeam />
                        </span>
                    </span>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skills;