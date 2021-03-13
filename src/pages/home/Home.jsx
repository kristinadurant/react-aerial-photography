import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BannerVideo, BeforeAfter, CheckList, Section1 } from '../../components';
import Gallery from './Gallery';
import { before, after, photoEditing, gallery, aerialShoots, galleryImages } from './Content';
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

            
            <div className='inner'>
                <section className='gallery'>
                    <div className='text' style={{ maxWidth: '400px'}}>
                        <h2 className='two-lines'>
                            <span className='font2'>Download High Resolution</span>
                            <span className='font1'>Photos & Videos</span>
                        </h2>
                        <p>{gallery}</p>
                        <Link className='accent-color link' to='/gallery'>
                            View Gallery
                        </Link>
                    </div>
                </section>
                <Gallery images={galleryImages} />

                <Section1 
                    name={'aerial-shoots'}
                    url={require('../../assets/images/Zion Landscape.jpg').default}
                    alt='Aerial Photo of Zion Landscape'
                >
                    <h2 className='two-lines'>
                        <span className='font2'>High Quality Aerial</span>
                        <span className='font1'>Photo & Video Shoots</span>
                    </h2>
                    <p>{aerialShoots}</p>
                    <Link className='accent-color link' to='/gallery'>
                        Find out more
                    </Link>
                </Section1>
            </div>

            <section className='photo-editing'>
                <div className='inner flex-justify'>
                                
                    <BeforeAfter before={before} after={after} />

                    <div className='text'>
                        <CheckList title='Professional Photo Editing' list={photoEditing} />
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Home
