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
                        <Link to='/gallery'>Download Photos & Videos</Link>
                    </li>
                    <li>
                        <Link to='/professional-photo-editing'>Professional Photo Editing</Link>
                    </li>
                </ul>
                <h3><Link to='/gallery'>View Gallery</Link></h3>
            </div>
            <div>
                <h3>About</h3>
                <ul>
                    <li><Link to='/about-pierre-photographer'>About Pierre</Link></li>
                    <li><Link to='/frequently-asked-questions' aria-label='frequently asked questions'>FAQ</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <Subscribe />
        </div>          
    )
}

export default FooterMain
