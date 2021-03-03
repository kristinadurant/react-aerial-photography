import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from './Subscribe';

const FooterMain = () => {
    return (
        <div className='main'>
            <div>
                <h3>Services</h3>
                <ul>
                    <li>
                        <Link to='/gallery'>High Resolution Photos & Videos</Link>
                    </li>
                    <li>
                        <Link to='/aerial-photo-video-shoot'>Aerial Photo & Video Shoots</Link>
                    </li>
                    <li>
                        <Link to='/professional-photo-editing'>Professional Photo Editing</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>About</h3>
                <nav>
                    <ul>
                        <li><Link to='/about-pierre-photographer'>About Pierre</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <Subscribe />
        </div>          
    )
}

export default FooterMain
