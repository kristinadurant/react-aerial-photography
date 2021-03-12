import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MainMenu = ({ setOpenMenu }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='dropdown' onMouseLeave={() => setOpenMenu(false)}>
            <nav>
                <ul>
                    <li className='submenu'>
                        <button className='flex-justify' onClick={() => setOpen(!open)}>
                            <span>Services</span>
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        {open && 
                        <ul>
                            <li><Link to='/gallery'>Download Photos & Videos</Link></li>
                            <li><Link to='/aerial-photo-video-shoot'>Aerial Video & Photo Shoots</Link></li>                      
                            <li><Link to='/professional-photo-editing'>Professional Photo Retouching</Link></li>
                        </ul>
                        }
                    </li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/about-pierre-photographer'>About</Link></li>                      
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainMenu
