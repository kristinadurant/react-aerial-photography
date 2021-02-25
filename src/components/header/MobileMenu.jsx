import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
                    <nav>
                        <ul>
                            <li><HashLink smooth to={'#services'} onClick={() => setOpen(false)}>Services</HashLink></li>
                            <li><HashLink smooth to={'#about'} onClick={() => setOpen(false)}>About</HashLink></li>
                            <li><Link to='gallery' onClick={() => setOpen(false)}>Gallery</Link></li>
                            <li><HashLink smooth to={'#contact'} onClick={() => setOpen(false)}>Contact</HashLink></li>
                        </ul>
                    </nav>  
                </div>
            }
        </>
    )
}

export default MobileMenu;
