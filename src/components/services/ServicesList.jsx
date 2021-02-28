import React from 'react';
import { Link } from 'react-router-dom';

const ServicesList = () => {

    return (
        <>
            <ul className='font2 check-list'>
                <li>                                    
                    <Link to='/gallery'>
                        <i className="fas fa-check"></i>
                        <span>Download a High Resolution Photo & Video</span>
                    </Link>
                </li>
                <li>
                    <Link to='/aerial-photo-video-shoot'>
                        <i className="fas fa-check"></i>
                        <span>Schedule an Aerial Video Shoot</span>
                    </Link>
                </li>
                <li>
                    <Link to='/aerial-photo-video-shoot'>
                        <i className="fas fa-check"></i>
                        <span>Shedule a Photo Shoot</span>
                    </Link>
                </li>
                <li>                                               
                    <Link to='/professional-photo-editing'>
                        <i className="fas fa-check"></i>
                        <span>Get a Professional Editing of Your Photos</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default ServicesList;
