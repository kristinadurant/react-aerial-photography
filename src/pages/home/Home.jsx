import React from 'react';
import { BannerVideo, Services, Steps, PhotoEditing, SectionPhotoShoots } from '../../components';
const list = [
    'Bookmark Images',
    'Send an Inquiry',
    'Choose type of Payment',
    'Receive High Resolution Files'
];

const Home = () => {
    return (
        <main id='home-page'>
            <BannerVideo />
            <Services />
            <SectionPhotoShoots />

            <section className='gallery full-screen'>
                <div className='inner padding'>
                    <Steps list={list} />
                </div>
            </section>

            <PhotoEditing />
        </main>
    )
}

export default Home