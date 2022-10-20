import '../styles/About.scss';
import meatballs_forlife from '../assets/images/meatballs_forlife.gif';
import { ImHeadphones } from 'react-icons/im';
import {LastFmData, Social} from '../components';

const About = () => {
    return (
        <div className="container">
            <span className="title-about">Hello... <br/> Is it me you're looking for?</span>

            <span className="about">
                I am based in Belgium,
                where I live with my two cats: Oliver and Negasonic Warhead.
                <br/>
                I like the 90s, metal music, gaming, books, Swedish meatballs, coffee and Crossfit.
            </span>

            <img className="meatballs" src={meatballs_forlife} alt="Swedish meatballs" />

            <div className="lastfm">
                <ImHeadphones />
                <br />
                <span className="listening-to">Currently listening to</span>
                <LastFmData
                    userName={'$userName'}
                    apiKey={'$apiKey'}
                />
            </div>
            <Social/>
        </div>
    );
};

export default About;
