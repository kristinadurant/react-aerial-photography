import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id='services' className='full-screen'>
            <div className='inner flex-center'>

                <div>
                    <h2 className='font2'>Video and Photo Services</h2>
                    <p className='font1'>Have a project in mind?</p>
                    <ul className='font2 check-list'>
                        <li>                                    
                            <Link to='/gallery'>
                                <span className='checkmark'><i /></span>
                                <span>Download a High Resolution Photo & Video</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/aerial-photo-video-shoot'>
                                <span className='checkmark'><i /></span>
                                <span>Schedule an Aerial Photo & Video Shoot</span>
                            </Link>
                        </li>
                        <li>                                               
                            <Link to='/professional-photo-editing'>
                                <span className='checkmark'><i /></span>
                                <span>Get a Professional Editing of Your Photos</span>
                            </Link>
                        </li>
                    </ul>
                    <p className='note'>* Video and Photo Shoots are available only in Miami, FL.</p>
                </div>

                <div>
                    
                </div>

            </div>
        </section>
    )
}

export default Services;
