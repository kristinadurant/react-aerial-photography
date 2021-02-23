import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MobileMenu from './MobileMenu';


const Header = () => {
    return (
        <header>

            <div className='main-menu-desktop hide-sm inner'>
                <Link to='/' className='logo'>Pierre</Link>
                <nav>
                    <ul>
                        <li><HashLink smooth to={'#services'}>Services</HashLink></li>
                        <li><HashLink smooth to={'#about'}>About</HashLink></li>
                        <li><Link to='gallery'>Gallery</Link></li>
                        <li><HashLink smooth to={'#contact'}>Contact</HashLink></li>
                    </ul>
                </nav>
            </div>
        
            <MobileMenu />

        </header>
    )
}

export default Header;
