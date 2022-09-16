import '../styles/About.scss';
import aboutme_2 from '../assets/images/aboutme_2.png';
import meatballs_forlife from '../assets/images/meatballs_forlife.gif';
import { FaFileDownload } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container">
            <span className="about">
                I'm a front end developer and web designer based in Belgium, <br />
                where I live with my two cats: Oliver and Negasonic Warhead.
            </span>

            <span className="likes">
                I like the 90s, metal music, books, Swedish meatballs, coffee and Crossfit.
            </span>

            <img className="meatballs" src={meatballs_forlife} alt="Swedish meatballs" />


            <div className="spotify">
                <span>
                    Currently listening to:
                </span>
            </div>

            <a className="button" href="../assets/documents/CV_Marthe-Eeckhout.png" download>
                <FaFileDownload /> Download CV
            </a>
        </div>
    );
};

export default About;
