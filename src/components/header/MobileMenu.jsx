import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='header-mobile show-sm inner'>
                <Link to='/' className='logo'>Pierre</Link>
                <button onClick={() => setOpen(true)}>
                    <span className='hide'>Open Menu</span>
                    <div className='menu-bars'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {open &&
                <div className='main-menu-mobile show-sm'>
                    <button className="close" onClick={() => setOpen(false)}>
                        <i className="fas fa-times"></i>
                        <span className='hide'>Close menu</span>
                    </button>
                    <MainMenu />
                    {/* <nav>
                        <ul>
                            <li><HashLink smooth to={'#services'} onClick={() => setOpen(false)}>Services</HashLink></li>
                            <li><Link to='/about-pierre-photographer' onClick={() => setOpen(false)}>About</Link></li>
                            <li><Link to='/gallery' onClick={() => setOpen(false)}>Gallery</Link></li>
                            <li><Link to='/contact' onClick={() => setOpen(false)}>Contact</Link></li>
                        </ul>
                    </nav>   */}
                </div>
            }
        </>
    )
}

export default MobileMenu;
