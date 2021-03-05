import React from 'react';
import ContactIntro from './ContactIntro';
import ContactForm from './ContactForm';
import { ContactContextProvider } from '../../context/ContactContext';

const Contact = () => {

    return (
        <main id='contact-page'>
            <ContactContextProvider>
                <ContactIntro />         
                <ContactForm />
            </ContactContextProvider>
        </main>
    )
}

export default Contact;
