import React, { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import { Form, FormEditing, FormInquiry, FormSchedule } from './';

const ContactForm = () => {
    const { option } = useContext(ContactContext);
    const options = {
        message: {title: 'Send a Message', textarea: 'Questions/Message'},
        schedule: {title: 'Schedule an Aerial Photo & Video Shoot', textarea: 'Tell us a bit more about yourself or your project'},
        inquiry: {title: 'Send an Inquiry', textarea: 'Questions/Comments'},
        editing: {title: 'Send an Inquiry about Photo Editing', textarea: 'Tell us a bit more about edits you would like to implement'}
    }

    return (
        <section id='contact-form' className='inner'>

            <h2>{options[option].title}</h2>

            <Form option={option} textarea={options[option].textarea}>
                {option === 'schedule' && <FormSchedule />}
                {option === 'inquiry' && <FormInquiry />}
                {option === 'editing' && <FormEditing />}
            </Form>

        </section>
    )
}

export default ContactForm;
