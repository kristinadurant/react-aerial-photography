import './style.css';
import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookmarksContext } from '../../context/BookmarksContext';
import Bookmarks from './Bookmarks';
import MainMenu from './MainMenu';


const Header = () => {
    const { bookmarks } = useContext(BookmarksContext);
    const [openMenu, setOpenMenu ] = useState(false);
    const [openBookmarks, setOpenBookmarks ] = useState(false);
    const location = useLocation();
    const path = location.pathname;
    const headerClassName = path==='/'? 'transparent': 'white';

    return (
        <header className={headerClassName}>
            <div className='inner flex-justify'>


                <Link to='/' className='logo'>Pierre</Link>

    
                <div className='flex-justify'>
                    <div className='button-container'>
                        <button className='button-menu' title='Main Menu'
                            onClick={() => setOpenMenu(true)}
                        >
                            <span className='hide'>Open Menu</span>
                            <div className='menu-bars'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        {openMenu && <MainMenu setOpenMenu={setOpenMenu} />}
                    </div>
                    <div className='button-container'>
                        <button 
                            className='button-bookmarks' title='Bookmarks'
                            onClick={() => setOpenBookmarks(!openBookmarks)}
                        >
                            <span className='total'>{bookmarks.length}</span>
                            <span className='hide'>Bookmarked Images</span>
                            <i className="far fa-bookmark"></i>
                        </button>
                        {openBookmarks && <Bookmarks setOpen={setOpenBookmarks}/>}
                    </div>
                </div>
                

            </div>
        </header>
    )
}

export default Header;
