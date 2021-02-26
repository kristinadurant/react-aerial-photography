import React, { useContext } from 'react';
import Form from './Form';
import { ContactContext } from '../../context/ContactContext';

const ContactForm = () => {
    const { option, OPTIONS } = useContext(ContactContext);

    return (
        <section id='contact-form' className='inner flex-center'>
            <h2>{OPTIONS[option]}</h2>
            <Form option={option} />
        </section>
    )
}

export default ContactForm;
