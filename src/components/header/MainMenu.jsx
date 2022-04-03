import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Header from './style.js';


const MainMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <Header.Menu>
            <ul className='flex-justify'>
                <li><Link to='/gallery'>GALLERY</Link></li>
                <li className='submenu'>
                    <button className='flex-justify' onClick={() => setOpen(!open)}>
                        SERVICES
                    </button>
                    {open && 
                    <ul className='dropdown' onMouseLeave={() => setOpen(false)}>
                        <li><Link to='/gallery'>Download Photos & Videos</Link></li>
                        <li><Link to='/professional-photo-editing'>Professional Photo Retouching</Link></li>
                    </ul>
                    }
                </li>
                <li><HashLink to='#about'>ABOUT</HashLink></li>                                    
                <li><HashLink to='#contact'>CONTACT</HashLink></li>
            </ul>
        </Header.Menu>
    )
}

export default MainMenu
