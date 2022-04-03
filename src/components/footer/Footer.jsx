import './style.css';
import React from 'react';
import FooterMain from './FooterMain';
import appConfig from '../../assets/config';
import { Hidden } from '../../styledComponents/elements';

const Footer = () => {
    return (
        <footer id="contact">
            <div className='inner'>

                <div>
                    <h2>Explore</h2>
                    <div className='social'>
                        <a href={`mailto: ${appConfig.linkEmail}`} title='email'>
                            <Hidden>Email</Hidden>
                            <i className="far fa-envelope"></i>
                        </a>
                        <a href={appConfig.linkIG} target='_blank' rel='noreferrer' title='Instagram'>
                            <Hidden>Instagram</Hidden>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <FooterMain />

                <div className='bottom flex-justify'>
                    <p>Copyrights</p>
                    <button onClick={() => window.scrollTo(0,0)}> 
                        Back to Top <i className="fas fa-long-arrow-alt-up"></i>
                    </button>     
                </div>   
            </div>        
        </footer>
    )
}

export default Footer;
