import React from 'react';
import { Banner } from '../components';
const image = require('../assets/images/IMG_1531.jpg');

const Photoshoot = () => {
    return (
        <main>
            <Banner title='Aerial Photo & Video Shoot' image={image}>
                <p className='font2' style={{ fontWeight: 'bold'}}>Miami, FL</p>
                <button className='button'>Schedule Now</button>
            </Banner>
        </main>
    )
}

export default Photoshoot;
