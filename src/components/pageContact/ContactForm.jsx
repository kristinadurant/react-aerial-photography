import React, { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import { Form, FormMessage, FormEditing, FormInquiry, FormSchedule } from './';

const ContactForm = () => {
    const { option } = useContext(ContactContext);
    const options = {
        message: {title: 'Send a message/question'},
        schedule: {title: 'Schedule an aerial photo & video shoot'},
        inquiry: {title: 'Send an inquiry'},
        editing: {title: 'Send an inquiry about photo editing'}
    }

    return (
        <section id='contact-form' className='inner'>

            <h2 className='font1'>{options[option].title}</h2>

            <Form option={option} textarea={options[option].textarea}>
                {option === 'message' && <FormMessage />}
                {option === 'schedule' && <FormSchedule />}
                {option === 'inquiry' && <FormInquiry />}
                {option === 'editing' && <FormEditing />}
            </Form>

        </section>
    )
}

export default ContactForm;
