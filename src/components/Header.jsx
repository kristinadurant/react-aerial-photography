import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MobileMenu from './MobileMenu';
import Favorites from './Favorites';


const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    const backgroundColor = path==='/'? 'transparent': '#fff';
    const color = path==='/'? '#fff': '#000';

    return (
        <header style={{ backgroundColor: backgroundColor, color: color}}>
            <Favorites />
            <div className='main-menu-desktop hide-sm inner'>
                <Link to='/' className='logo'>Pierre</Link>
                <nav>
                    <ul>
                        <li><HashLink smooth to={'#services'}>Services</HashLink></li>
                        <li><Link to='gallery'>Gallery</Link></li>
                        <li><Link to='about-pierre-photographer'>About</Link></li>                      
                        <li><HashLink smooth to={'#contact'}>Contact</HashLink></li>
                    </ul>
                </nav>
            </div>
        
            <MobileMenu />

        </header>
    )
}

export default Header;
