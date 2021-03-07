import React from 'react';
import { Banner, Steps } from '../../components';
import { bannerImage, steps } from './Content';

const Photoshoot = () => {
    return (
        <main>
            <Banner title='Aerial Photo & Video Shoot' image={bannerImage}>
                <p className='font2' style={{ fontWeight: 'bold'}}>Miami, FL</p>
                <button className='button'>Schedule Now</button>
            </Banner>

            <Steps list={steps} />

        </main>
    )
}

export default Photoshoot;
