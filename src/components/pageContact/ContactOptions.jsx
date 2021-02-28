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
                        <span className='checkmark'><i /></span>
                        <span>Send a Message/Question</span>
                    </HashLink>
                </li>

                <li className={option==='schedule' && 'active'}>                                                   
                    <HashLink smooth to='#contact-form' onClick={() => setOption('schedule')}>
                        <span className='checkmark'><i /></span>
                        <span>Schedule an Aerial Photo & Video Shoot</span>
                    </HashLink>
                </li>

                <li className={option==='inquiry' && 'active'}>                                                
                    <HashLink smooth to='#contact-form' onClick={() => setOption('inquiry')}>
                        <span className='checkmark'><i /></span>
                        <span>Download a High Resolution Photo & Video</span>
                    </HashLink>
                </li>

                <li className={option==='editing' && 'active'}>                                    
                    <HashLink smooth to='#contact-form' onClick={() => setOption('editing')}>
                        <span className='checkmark'><i /></span>
                        <span>Get a Professional Editing of Your Photos</span>
                    </HashLink>
                </li>
                
            </ul>
        </div>
    )
}

export default ContactOptions;
