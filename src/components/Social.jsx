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
                            <a href="https://www.linkedin.com/in/marthe-eeckhout/">
                                <FaLinkedinIn size={25} />
                            </a>
                        </IconContext.Provider>
                    </span>
                    <span className="behance">
                         <IconContext.Provider value={{ color: 'white' }}>
                             <a href="https://www.behance.net/marthe-eeckhout">
                                <FaBehance size={30} />
                             </a>
                        </IconContext.Provider>
                    </span>
                    <span className="github">
                         <IconContext.Provider value={{ color: 'white' }}>
                             <a href="https://github.com/meeckhout">
                                <FaGithub size={25} />
                             </a>
                        </IconContext.Provider>
                    </span>
                </div>
            </div>
        </>
    )
}

export {Social};