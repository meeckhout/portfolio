import React from 'react';
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../styles/Social.scss';

const Social = () => {
    return (
        <>
            <div className="soc-med-bottom">
                <div className="social-med">
                    <span className="linkedin">
                        <IconContext.Provider value={{ color: 'white' }}>
                            <FaLinkedinIn size={25} />
                        </IconContext.Provider>
                    </span>
                    <span className="behance">
                         <IconContext.Provider value={{ color: 'white' }}>
                            <FaBehance size={30} />
                        </IconContext.Provider>
                    </span>
                    <span className="github">
                         <IconContext.Provider value={{ color: 'white' }}>
                            <FaGithub size={25} />
                        </IconContext.Provider>
                    </span>
                </div>
            </div>
        </>
    )
}

export {Social};