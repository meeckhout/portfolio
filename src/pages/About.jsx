import '../styles/About.scss';
import meatballs_forlife from '../assets/images/meatballs_forlife.gif';
import { FaFileDownload } from 'react-icons/fa';
import {LastFmData} from '../components/lastFmData';

const About = () => {
    return (
        <div className="container">
            <span className="title-about">HI!</span>

            <span className="about">
                I'm a front end developer and web designer based in Belgium, <br />
                where I live with my two cats: Oliver and Negasonic Warhead.
            </span>

            <span className="likes">
                I like the 90s, metal music, books, Swedish meatballs, coffee and Crossfit.
            </span>

            <img className="meatballs" src={meatballs_forlife} alt="Swedish meatballs" />

            <div className="lastfm">
                <span className="listening-to">Currently listening to</span>
                <LastFmData
                    userName={'pityparty-'}
                    apiKey={'$apiKey'}/>
            </div>

            <a className="button" href="../assets/documents/CV_Marthe-Eeckhout.png" download>
                <FaFileDownload /> Download CV
            </a>
        </div>
    );
};

export default About;
