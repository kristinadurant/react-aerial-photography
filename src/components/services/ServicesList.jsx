import React from 'react';
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
        </>
    )
}

export default ServicesList
