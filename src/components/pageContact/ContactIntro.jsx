import React from 'react';
import ContactOptions from './ContactOptions';

const ContactIntro = () => {

    return (
        <section className='contact full-screen flex-justify'>
            <div className='overlay' />
            <div className='inner flex-justify'>

                <div style={{ width: '50%'}}>
                    <h1 className='font1'>Contact</h1>
                    <p className='font2'>Please use the contact form for better assistance or send us an email: </p>
                    <a href='mailto: pierre.videophotographer@gmail.com'>
                        pierre.videophotographer@gmail.com
                    </a>
                </div>
                
                <ContactOptions />
                
            </div>
        </section>
    )
}

export default ContactIntro;
