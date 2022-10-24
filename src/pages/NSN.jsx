import React from 'react';
import '../styles/NSN.scss';
import Design_Dashboard from '../assets/images/Design_Dashboard.png';
import Design_Chat_Box_V2 from '../assets/images/Design_Chat_Box_V2.png';

const NSN = () => {
    return (
        <>
            <div className="container-messenger">
                <div className="flex">
                    <img className="work_2" src={Design_Dashboard} alt="nsn messenger pic"/>
                    <img className="work_2" src={Design_Chat_Box_V2} alt="nsn messenger pic"/>
                </div>
                <span className="info">
                    A closer look at the LastFM plugin for NSN Messenger
                </span>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                    width="77%"
                    height="500"
                    src="data:text/html;charset=utf-8,
                        <head><base target='_blank' /></head>
                        <body><script src='https://gist.github.com/meeckhout/51188c9be643fdc302af996f84c59829.js'></script>
                        </body>"
                />
                <div className="link-project">
                    <span className="project-txt">
                        View project on
                        <a className="link-github" href="https://www.behance.net/gallery/151631265/The-Nostalgia-Network-Messenger">
                            Github
                        </a>
                    </span>
                    <span className="project-txt">
                        View project on
                        <a className="link-github" href="https://github.com/meeckhout/nsn-messenger">
                            Behance
                        </a>
                    </span>
                </div>
            </div>
            </>
    );
}

export default NSN;