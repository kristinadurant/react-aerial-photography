import React from 'react';
import ServicesImage from './ServicesImage';
import ServicesList from './ServicesList';

const Services = () => {
    return (
        <section id='services'>
            <div className='inner'>
                <div>
                    <h2>Video and Photo Services</h2>
                    <p>Have a project in mind?</p>
                    <p>Let’s work together.</p>
                    <ServicesImage />
                </div>
                <div>
                    <ServicesList />
                </div>
            </div>
        </section>
    )
}

export default Services;
