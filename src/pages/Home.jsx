import '../styles/Home.scss';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
    return (
        <div className="container">

            <h1>
                Hi,
                I'm Marthe, <br />
                web developer and designer.
            </h1>
            <div className="glitch">
               <TypeWriterEffect
                   textStyle={{ fontFamily: 'VT323', fontSize: '3rem' }}
                   startDelay={100}
                   cursorColor="white"
                   text="I like making pretty things."
                   typeSpeed={80}
               />
            </div>
        </div>
    );
};

export default Home;
