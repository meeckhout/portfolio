import React from 'react';
import {ContactForm, Social} from '../components';
import '../styles/Contact.scss';

const Contact = () => {
    return (
        <>
            <div className="contact-form">
                <span className="contact-title">Contact me</span>
                <ContactForm />
            </div>
            <div className="social-media-bar">
                <Social />
            </div>
        </>
    );
};

export default Contact