import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MainMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='menu'>
            <ul>
                <li className='submenu' onMouseLeave={() => setOpen(false)}>
                    <button onClick={() => setOpen(!open)}>Services</button>
                    {open && 
                    <ul>
                        <li><Link to='/gallery'>High Resolution Photos & Videos</Link></li>
                        <li><Link to='/aerial-photo-video-shoot'>Aerial Video & Photo Shoots</Link></li>                      
                        <li><Link to='/professional-photo-editing'>Professional Photo Retouching</Link></li>
                    </ul>
                    }
                </li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/about-pierre-photographer'>About</Link></li>                      
                <li className='cta'><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default MainMenu
