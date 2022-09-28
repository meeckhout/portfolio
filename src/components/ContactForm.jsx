import React, { useState } from "react";
import '../styles/ContactForm.scss';


const FORM_ENDPOINT = "https://public.herotofu.com/v1/334fd880-3f14-11ed-a10f-d1a38bd15d37";

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
                <div className="submitted-message">
                    <h2>Thank you!</h2>
                    <div>I'll be in touch soon.</div>
                    <img className="horns-up" src="https://cdn-icons-png.flaticon.com/512/1776/1776554.png" alt="horns up" />
                </div>
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
                <span className="contact-title">Contact me</span>
                <div className="name-email">
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <div className="message">
                    <textarea placeholder="Message" name="message" required />
                </div>
                <div className="btn-message">
                    <button type="submit"> Send message! </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;