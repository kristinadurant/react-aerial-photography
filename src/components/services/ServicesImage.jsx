import React, { useContext } from 'react';
import { ServicesContext } from '../../context/ServicesContext';

const ServicesImage = () => {
    const { service, services } = useContext(ServicesContext);

    return (
        <div>
            <img 
                src={require(`../../assets/images/${services[service].img}`).default} 
                alt={services.description} 
                width='300px' height='auto'
            />
        </div>
    )
}

export default ServicesImage
