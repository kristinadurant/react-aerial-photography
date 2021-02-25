import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from './Subscribe';

const FooterMain = () => {
    return (
        <div className='flex-justify'>
            <div>
                <h3>Services</h3>
                <ul>
                    <li>
                        <button>High Resolution Photos & Videos</button>
                    </li>
                    <li>
                        <button>Aerial Video Shoots</button>
                    </li>
                    <li>
                        <button>Photo Shoots</button>
                    </li>
                    <li>
                        <button>Professional Photo Retouching</button>
                    </li>
                </ul>
            </div>
            <div>
                <h3>About</h3>
                <nav>
                    <ul>
                        <li><Link to='/about-pierre-photographer'>About Pierre</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/gallery'>Videos</Link></li>
                        <li><button>Contact</button></li>
                    </ul>
                </nav>
            </div>
            <Subscribe />
        </div>          
    )
}

export default FooterMain
