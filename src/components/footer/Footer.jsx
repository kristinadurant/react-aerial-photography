import React from 'react';
import FooterMain from './FooterMain';

const Footer = () => {
    return (
        <footer>
            <div className='inner'>
                <div>
                    <h2>Explore</h2>
                    <div className='social'>
                        <a href='mailto: pierre.videophotographer@gmail.com' title='email'>
                            <span className='hide'>Email</span>
                            <i className="far fa-envelope"></i>
                        </a>
                        <a href='https://www.instagram.com/pieri_takingoff/' target='_blank' rel='noreferrer' title='instagram'>
                            <span className='hide'>Instagram</span>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <FooterMain />
                <div className='bottom'>
                    <p>Copyrights</p>
                    <button onClick={() => window.scrollTo(0,0)}> 
                        Back to Top<i className="fas fa-long-arrow-alt-up"></i>
                    </button>     
                </div>   
            </div>        
        </footer>
    )
}

export default Footer;
