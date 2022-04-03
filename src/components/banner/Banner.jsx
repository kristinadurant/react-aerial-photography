import './style.css';
import React from 'react';
import { Hidden } from '../../styledComponents/elements';

const Banner = ({ title, subtitle, image }) => {

    function handleScroll() {
        document.querySelector('.banner + *').scrollIntoView();
    }

    return (
        <section 
            className='banner full-screen background-image'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1496089479256-16374dc12c9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1714&q=80`}}
        >
            <div className='overlay'>
                <div className='inner '>
                    <h1>{title}</h1>
                    <p className='font2 light-grey' style={{ fontWeight: 'bold'}}>{subtitle}</p>
                    <button 
                        className='square' title='Scroll Down'
                        onClick={handleScroll} 
                    >
                        <Hidden>Scroll Down</Hidden>
                        <i className="fas fa-sort-down fa-3x"></i>
                    </button>
                </div>   
            </div>
        </section>
    )
}

export default Banner;
