import '../styles/About.scss';
import { FaFileDownload } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container">
            <span className="about">
                I'm a front end developer and web designer based in Belgium.
            </span>

            <span className="likes">
                I like the 90s, metal music, books, Swedish meatballs, coffee and Crossfit.
            </span>

            <a className="button" href="../assets/documents/CV_Marthe-Eeckhout.pdf" download="CV_Marthe-Eeckhout.pdf">
                <FaFileDownload /> Download Resume
            </a>
        </div>
    );
};

export default About;
