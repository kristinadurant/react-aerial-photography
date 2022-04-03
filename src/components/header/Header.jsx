import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import Header from './style.js'

const AppHeader = () => {
    const headerClassName ='transparent';

    return (
        <Header className={headerClassName}>
            <div className='inner flex-justify'>
                <Link to='/' className='logo'>HP</Link>
                <div className='flex-justify'>
                <MainMenu />
                </div>
            </div>
        </Header>
    )
}

export default AppHeader;
