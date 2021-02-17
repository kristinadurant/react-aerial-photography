import React, { useState } from 'react';
import MainMenu from './MainMenu';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>

            <div className='main-menu-desktop hide-sm inner'>
                <div className='logo'>Pierre</div>
                <MainMenu />
            </div>

            <div className='header-mobile show-sm'>
                <div>
                    <div>Aerial Photography</div>
                    <button onClick={() => setOpen(true)}>
                        <span className='hide'>Open Menu</span>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
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
