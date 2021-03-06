import React from 'react';
import Carousel from './Carousel';
import { BannerVideo, Services, StepsHome, BeforeAfter, CheckList } from '../../components';
import { gallerySteps, before, after, photoEditing } from './Content';

const Home = () => {
    return (
        <main id='home-page'>
            <BannerVideo />
            <Services />

            <section className='photo-shoots full-screen'>
                <Carousel />
                <div className='inner'>
                    <h2 className='font1'>
                        Aerial Photo & Video Shoots
                    </h2>
                </div>
            </section>

            <section className='gallery full-screen padding'>
                <div className='inner'>
                    <StepsHome 
                        title={'Download High Resolution Photos & Videos'}
                        list={gallerySteps} link={{url: '/gallery', text: 'View Gallery'}}
                    />
                </div>
            </section>

            <section className='full-screen photo-editing'>
                <div className='inner flex-justify'>
                                
                    <BeforeAfter before={before} after={after} />
            
                    <CheckList title='Proffesional Photo Editing' list={photoEditing} />

                </div>
            </section>
        </main>
    )
}

export default Home
