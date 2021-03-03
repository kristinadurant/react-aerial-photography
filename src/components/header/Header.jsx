import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Bookmarks from './Bookmarks';
import MainMenu from './MainMenu';


const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const headerClassName = path==='/'? 'transparent': 'white';

    return (
        <header className={headerClassName}>
            <Bookmarks />
            <div className='main-menu-desktop hide-sm'>
                <div className='inner'>
                    <Link to='/' className='logo'>Pierre</Link>
                    <MainMenu />
                </div>
            </div>
            <MobileMenu />

        </header>
    )
}

export default Header;
