import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MainMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <ul className='flex-justify'>
                <li><Link to='/gallery'>GALLERY</Link></li>
                <li className='submenu'>
                    <button className='flex-justify' onClick={() => setOpen(!open)}>
                        SERVICES
                    </button>
                    {open && 
                    <ul className='dropdown'>
                        <li><Link to='/gallery'>- Download Photos & Videos</Link></li>
                        <li><Link to='/professional-photo-editing'>- Professional Photo Retouching</Link></li>
                    </ul>
                    }
                </li>                                    
                <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default MainMenu
