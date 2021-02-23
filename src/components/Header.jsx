import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>

            <div className='main-menu-desktop hide-sm inner'>
                <Link to='/' className='logo'>Pierre</Link>
                <MainMenu />
            </div>

            <div className='header-mobile show-sm inner'>
                    <div>Pierre</div>
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
                </div>
            }
        </header>
    )
}

export default Header;
