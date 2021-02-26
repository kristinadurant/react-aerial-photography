import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ContactOptions = () => {

    return (       
        <div style={{ width: '50%'}}>
            <ul className='font2'>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <HashLink smooth to='#contact-form'>Send a Message</HashLink>
                </li>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <HashLink smooth to='#contact-form'>Schedule an Aerial Photo & Video Shoot</HashLink>
                </li>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <HashLink smooth to='#contact-form'>Download a High Resolution Photo & Video</HashLink>
                </li>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <HashLink smooth to='#contact-form'>Get a Professional Editing of Your Photos</HashLink>
                </li>
            </ul>
        </div>
    )
}

export default ContactOptions;
