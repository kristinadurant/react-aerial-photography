import React, { useContext } from 'react';
import { ServicesContext } from '../../context/ServicesContext';

const ServicesList = () => {
    const { services, service, setService } = useContext(ServicesContext);

    return (
        <ul>
            {services.map(serv => {
                return (
                    <li key={serv.id}>                                    
                        <i className="fas fa-check"></i>
                        <button 
                            className={serv.id===service? 'active': null}
                            onClick={() => setService(serv.id)}
                        >
                            {serv.description}
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}

export default ServicesList
