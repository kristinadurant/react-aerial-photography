import React from 'react';
import { Link } from 'react-router-dom';

const ServicesList = () => {

    return (
        <>
            <ul className='font2'>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <Link to='/gallery'>Download a High Resolution Photo & Video</Link>
                </li>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <Link to='/aerial-photo-video-shoot'>Schedule an Aerial Video Shoot</Link>
                </li>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <Link to='/aerial-photo-video-shoot'>Shedule a Photo Shoot</Link>
                </li>
                <li>                                    
                    <i className="fas fa-check"></i>
                    <Link to=''>Get a Professional Retouch of Your Photos</Link>
                </li>
            </ul>
        </>
    )
}

export default ServicesList
