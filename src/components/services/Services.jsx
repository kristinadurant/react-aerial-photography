import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ServicesImage from './ServicesImage';
import ServicesList from './ServicesList';

const Services = () => {

    return (
        <section id='services' className='full-screen'>
            <div className='inner'>
                <div>
                    <h2 className='font2'>Video and Photo Services</h2>
                    <p className='font1'>Have a project in mind?</p>
                    <ServicesImage />
                </div>
                <div>
                    <ServicesList />
                    <HashLink smooth to='#contact' className='link'>Let’s work together.</HashLink>
                </div>
            </div>
        </section>
    )
}

export default Services;
