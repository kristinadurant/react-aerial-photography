import React from 'react';
import Banner from '../components/Banner';
const image = require('../assets/images/IMG_1531.jpg');

const PhotoEditing = () => {
    return (
        <main>
            <Banner title='Professional Photo Editing' image={image}>
                <p className='font2' style={{ fontWeight: 'bold'}}>
                    Retouch - Color Adjustment - Object removal
                </p>
            </Banner>
        </main>
    )
}

export default PhotoEditing
