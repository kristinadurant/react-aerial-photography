import React from 'react';
import ContactOptions from './ContactOptions';

const ContactIntro = () => {

    return (
        <section className='contact full-screen flex-justify'>
            <div className='overlay' />
            <div className='inner'>
                <h1 className='font1'>
                    Please use the contact form for better assistance
                </h1>
                <ContactOptions /> 
                <a href='mailto: pierre.videophotographer@gmail.com'>
                    pierre.videophotographer@gmail.com    
                </a>                       
            </div>
        </section>
    )
}

export default ContactIntro;
