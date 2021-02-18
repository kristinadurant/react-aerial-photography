import React from 'react';
import { HashLink } from 'react-router-hash-link';
const services = [
    'Photoshop',
    'Portraits',
    'Aerial Videos of Properties',
    'Unique Prints'  
]

const ServicesList = () => {

    return (
        <>
            <ul className='font2'>
                {services.map(service => {
                    return (
                        <li key={service}>                                    
                            <i className="fas fa-check"></i>
                            <span>{service}</span>
                        </li>
                    );
                })}
            </ul>
            <HashLink smooth to='#contact'>Let’s work together.</HashLink>
        </>
    )
}

export default ServicesList
