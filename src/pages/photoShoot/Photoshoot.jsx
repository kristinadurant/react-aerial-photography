import React from 'react';
import { Helmet } from 'react-helmet';
import { Banner, Steps } from '../../components';
import { bannerImage, steps } from './Content';

const Photoshoot = () => {
    return (
        <main>
            <Helmet>
                <title>Aerial Photo and Video Shoots</title>
                <meta name='description' content='Schedule a Photo and Video Shoot in Miami with Drone. ' />
                <meta name='keywords' content='Aerial Photo Video Shoot Drone Miami' />
            </Helmet>

            <Banner 
                title='Aerial Photo & Video Shoot'
                subtitle='Miami, FL'
                image={bannerImage}
            >
                <button className='button'>Schedule Now</button>
            </Banner>

            <Steps list={steps} />

        </main>
    )
}

export default Photoshoot;
