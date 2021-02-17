import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Form from './Form';

const Footer = () => {
    return (
        <footer id='contact'>
            <div className='inner'>
                <div>
                    <h2>Contact Pierre</h2>
                    <div className='social'>
                        <a href='https://www.instagram.com/pieri_takingoff/' target='_blank' rel='noreferrer'>
                            <span className='hide'>Instagram</span>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
                <div>
                    <HashLink smooth to='#root'>Back to Top<i class="fas fa-long-arrow-alt-up"></i></HashLink>            
                </div>   
            </div>        
        </footer>
    )
}

export default Footer;
