import React, { useState } from "react";
import '../styles/ContactForm.scss';


const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div className="form">
                <div className="name-email">
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <div className="message">
                    <textarea placeholder="Message" name="message" required />
                </div>
                <div>
                    <button type="submit"> Send a message </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;