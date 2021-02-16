import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <header>
            <div className='inner'>
                <div>Aerial Photography</div>
                <nav>
                    <ul>
                        <li><HashLink smooth to={'#about'}>About</HashLink></li>
                        <li><HashLink smooth to={'#contact'}>Contact</HashLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
