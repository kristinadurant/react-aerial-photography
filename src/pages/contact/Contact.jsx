import React from 'react';
import { Helmet } from 'react-helmet';
import ContactIntro from './ContactIntro';
import ContactForm from './ContactForm';
import { ContactContextProvider } from '../../context/ContactContext';

const Contact = () => {

    return (
        <main id='contact-page'>

            <Helmet>
                <title>Contact Pierre Aerial Photographer and Videographer</title>
                <meta name='description' content='Schedule Photo and Video Shoots in Miami, send an inquiry to download high resolution photos and videos or professional photo editing' />
                <meta name='keywords' content='Aerial Photo Video Drone Miami Contact' />
            </Helmet>

            <ContactContextProvider>
                <ContactIntro />         
                <ContactForm />
            </ContactContextProvider>

        </main>
    )
}

export default Contact;
