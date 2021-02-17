import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const MainMenu = () => {
    return (
        <nav>
            <ul>
                <li><HashLink smooth to={'#about'}>About</HashLink></li>
                <li><Link to='gallery'>Gallery</Link></li>
                <li><HashLink smooth to={'#contact'}>Contact</HashLink></li>
            </ul>
        </nav>
    )
}

export default MainMenu;
