import React from 'react';
import ContactOptions from './ContactOptions';

const ContactIntro = () => {

    return (
        <section className='contact full-screen flex-justify'>
            <div className='overlay' />
            <div className='inner'>
                <h1 className='font1'>
                    Contact Us
                </h1>
                <ContactOptions />
                <p className='email-link'>
                    <a href='mailto: pierre.videophotographer@gmail.com'>
                        pierre.videophotographer@gmail.com    
                    </a> 
                </p>                      
            </div>
        </section>
    )
}

export default ContactIntro;
