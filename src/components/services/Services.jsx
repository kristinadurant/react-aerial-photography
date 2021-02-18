import React from 'react';
import ServicesImage from './ServicesImage';
import ServicesList from './ServicesList';

const Services = () => {

    return (
        <section id='services'>
            <div className='inner'>
                <div>
                    <h2 className='font2'>Video and Photo Services</h2>
                    <p className='font1'>Have a project in mind?</p>
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
