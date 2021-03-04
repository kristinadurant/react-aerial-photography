import React from 'react';
import { CheckList, BeforeAfter } from '../../components';
import Banner from '../../components/Banner';
import { Intro } from '../../components/pagePhotoEditing';
import { services } from './Services';
const image = require('../../assets/images/IMG_1531.jpg');

const PhotoEditing = () => {
    return (
        <main className='photo-editing-page'>

            <Banner title='Professional Photo Editing' image={image}>
                <p className='font2' style={{ fontWeight: 'bold'}}>
                    Retouch - Color Adjustment - Object removal
                </p>
            </Banner>

            <Intro />

            {services.map(section => {
            return (
                <section key={section.title} className='inner flex-justify full-screen photo-editing'>       
                    <CheckList title={section.title} list={section.services} />
                    <BeforeAfter before={section.before} after={section.after} />
                </section>
            )
            })}

        </main>
    )
}

export default PhotoEditing
