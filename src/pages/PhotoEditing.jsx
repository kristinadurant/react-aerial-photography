import React from 'react';
import Banner from '../components/Banner';
import { Intro, ColorAdjustment } from '../components/pagePhotoEditing';
const image = require('../assets/images/IMG_1531.jpg');

const PhotoEditing = () => {
    return (
        <main className='photo-editing-page'>
            <Banner title='Professional Photo Editing' image={image}>
                <p className='font2' style={{ fontWeight: 'bold'}}>
                    Retouch - Color Adjustment - Object removal
                </p>
            </Banner>
            <Intro />
            <ColorAdjustment />
        </main>
    )
}

export default PhotoEditing
