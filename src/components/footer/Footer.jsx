import React from 'react';
import FooterMain from './FooterMain';
import appConfig from '../../assets/config';
import { Inner } from '../../styledComponents/containers';
import { Hidden } from '../../styledComponents/elements';
import Footer from './style.js';

const FooterComponent = () => {
    return (
        <Footer id="contact">
            <Inner>

                <Footer.Top>
                    <h2>Explore</h2>
                    <Footer.Social>
                        <a href={`mailto: ${appConfig.linkEmail}`} title='email'>
                            <Hidden>Email</Hidden>
                            <i className="far fa-envelope"></i>
                        </a>
                        <a href={appConfig.linkIG} target='_blank' rel='noreferrer' title='Instagram'>
                            <Hidden>Instagram</Hidden>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </Footer.Social>
                </Footer.Top>

                <FooterMain />

                <Footer.Bottom>
                    <p>Copyrights</p>
                    <button onClick={() => window.scrollTo(0,0)}> 
                        Back to Top <i className="fas fa-long-arrow-alt-up"></i>
                    </button>     
                </Footer.Bottom>   
            </Inner>        
        </Footer>
    )
}

export default FooterComponent;
