import React from 'react'
import { Link } from 'react-router-dom'
import appLocalization from '../../../assets/localization'
import { Inner } from '../../../styledComponents/containers'
import SectionPortraitImage from '../../../styledComponents/containers/sectionPortraitImage/SectionPortraitImage'
import { gallery } from '../Content'

const PhotoShoots = () => {
  return (
      <Inner>
        <SectionPortraitImage 
            name={'gallery'}
            url={require('../../../assets/images/Zion Landscape.jpg')}
            alt='Aerial Photo of Zion Landscape'
        >
            <h2 className='two-lines'>
                <span className='font2'>{appLocalization.photoShootsTitle}</span>
                <span className='font1'>{appLocalization.photoShootsTitleLarge}</span>
            </h2>
            <p>{gallery}</p>
            <Link className='accent-color link' to='/gallery'>
                {appLocalization.photoShotsButtonText}
            </Link>
           
        </SectionPortraitImage>
    </Inner>
  )
}

export default PhotoShoots