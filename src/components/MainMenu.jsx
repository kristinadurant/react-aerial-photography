import React from 'react';
import { HashLink } from 'react-router-hash-link';


const MainMenu = () => {
    return (
        <nav>
            <ul>
                <li><HashLink smooth to={'#about'}>About</HashLink></li>
                <li><HashLink smooth to={'#contact'}>Contact</HashLink></li>
            </ul>
        </nav>
    )
}

export default MainMenu;
