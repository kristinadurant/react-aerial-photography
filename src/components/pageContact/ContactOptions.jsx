import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import { ContactContext } from '../../context/ContactContext';

const ContactOptions = () => {
 const { option, setOption } = useContext(ContactContext);

    return (       
        <div style={{ width: '50%'}}>
            <ul className='font2 check-list'>
                <li className={option==='message' && 'active'}>                                    
                    
                    <HashLink smooth to='#contact-form' onClick={() => setOption('message')}>
                        <i className="fas fa-check"></i>
                        <span>Send a Message</span>
                    </HashLink>
                </li>
                <li className={option==='schedule' && 'active'}>                                    
                    
                    <HashLink smooth to='#contact-form' onClick={() => setOption('schedule')}>
                        <i className="fas fa-check"></i>
                        <span>Schedule an Aerial Photo & Video Shoot</span>
                    </HashLink>
                </li>
                <li className={option==='message' && 'inquiry'}>                                                
                    <HashLink smooth to='#contact-form' onClick={() => setOption('inquiry')}>
                        <i className="fas fa-check"></i>
                        <span>Download a High Resolution Photo & Video</span>
                    </HashLink>
                </li>
                <li className={option==='message' && 'editing'}>                                    
                    <HashLink smooth to='#contact-form' onClick={() => setOption('editing')}>
                    <i className="fas fa-check"></i>
                        <span>Get a Professional Editing of Your Photos</span>
                    </HashLink>
                </li>
            </ul>
        </div>
    )
}

export default ContactOptions;
