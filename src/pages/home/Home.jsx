import React from 'react';
import Carousel from './Carousel';
import { BannerVideo, Services, StepsHome, BeforeAfter, CheckList } from '../../components';
import { gallerySteps, before, after, photoEditing } from './Content';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <main id='home-page'>

            <Helmet>
                <title>Aerial Photographer and Videographer</title>
                <meta name='description' content='Photo and Video Shoots in Miami, download high resolution photos and videos, professional photo editing' />
                <meta name='keywords' content='Aerial Photo Video Drone Miami' />
            </Helmet>

            <BannerVideo />
            <Services />

            <section className='gallery padding'>
                <div className='inner'>
                    <StepsHome 
                        subTitle={'High Resolution'}
                        title={'Photos & Videos'}
                        list={gallerySteps} link={{url: '/gallery', text: 'View Gallery'}}
                    />
                </div>
            </section>

            <section className='photo-shoots full-screen'>
                <Carousel />
                <div className='inner'>
                    <h2 className='font1'>
                        Aerial Photo & Video Shoots
                    </h2>
                </div>
            </section>



            <section className='full-screen photo-editing padding'>
                <div className='inner flex-justify'>
                                
                    <BeforeAfter before={before} after={after} />
            
                    <CheckList title='Proffesional Photo Editing' list={photoEditing} />

                </div>
            </section>
        </main>
    )
}

export default Home
