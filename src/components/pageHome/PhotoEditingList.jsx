import React from 'react';
import { Link } from 'react-router-dom';

const PhotoEditingList = () => {

    return (
        <>
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
        </>
    )
}

export default PhotoEditingList;
