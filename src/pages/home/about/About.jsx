import React from 'react'
import { HashLink } from 'react-router-hash-link'
import appLocalization from '../../../assets/localization'
import { Inner } from '../../../styledComponents/containers'
import SectionPortraitImage from '../../../styledComponents/containers/sectionPortraitImage/SectionPortraitImage'

const About = () => {
  return (
      <Inner id="about">
        <SectionPortraitImage
            url={require('../../../assets/images/Pierre_Photographer.jpg')} 
            alt='Portrait of Pierre the Photographer'
        >
            <span className='font2'>{appLocalization.aboutTitle}</span>
            <h2 className='font1'>{appLocalization.aboutTitleLarge}</h2>
            <p>{appLocalization.aboutText}</p>
            <HashLink smooth to='#contact' className='link'>
                {appLocalization.aboutButtonText}
            </HashLink>
        </SectionPortraitImage>
    </Inner>
  )
}

export default About