import React from 'react';
import {ContactForm, Social} from '../components';
import '../styles/Contact.scss';

const Contact = () => {
    return (
        <>
            <div className="contact-form">
                <ContactForm />
            </div>

            <Social />
        </>
    );
};

export default Contact