import React from 'react';
import ContactIntro from '../components/pageContact/ContactIntro';
import ContactForm from '../components/pageContact/ContactForm';
import { ContactContextProvider } from '../context/ContactContext';

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
