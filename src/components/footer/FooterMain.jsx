import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './style.js';
import appConfig from '../../assets/config';
import appLocalization from '../../assets/localization';
import TestimonialForm from './TestimonialForm';

const FooterMain = () => {
    return (
        <Footer.Main>
            <div>
                <h3>{appLocalization.services}</h3>
                <ul>
                    <li>
                        <Link to='/gallery'>Download Photos & Videos</Link>
                    </li>
                    <li>
                        <Link to='/professional-photo-editing'>{appLocalization.photoEditingTitleLarge}</Link>
                    </li>
                </ul>
                <h3><Link to='/gallery'>{appLocalization.gallery} <i className="fas fa-long-arrow-alt-right"></i></Link></h3>
                <h3>{appLocalization.contact}</h3>
                <ul>
                    <li>
                    <a href={`mailto: ${appConfig.linkEmail}`} title='Email'>
                        <p>{appConfig.linkEmail}</p>
                    </a>
                    </li>
                    <li>
                    <a href={appConfig.linkIG} target='_blank' rel='noreferrer' title='Instagram'>
                        <p>Instagram: {appConfig.accountNameIG}</p>
                    </a>
                    </li>
                </ul>
            </div>
            <Footer.TestimonialFormContainer>
                <TestimonialForm />
            </Footer.TestimonialFormContainer>
            {/* <Subscribe /> */}
        </Footer.Main>          
    )
}

export default FooterMain
