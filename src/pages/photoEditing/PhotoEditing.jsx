import './style.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Banner, Steps, CheckList, BeforeAfter } from '../../components';
import { bannerImage, steps, services } from './Content';
import ColorAdjustment from './ColorAdjustment';

const PhotoEditing = () => {
    return (
        <main className='photo-editing-page'>

            <Helmet>
                <title>Professional Photo Editing</title>
                <meta name='description' content='Professional photo editing: Portrait Retouching, Body Retouching, Background Manipulation, Photo Restouration and other edits.' />
                <meta name='keywords' content='Photo Editing Retouch Color Adjustment Restouration' />
            </Helmet>

            <Banner 
                title='Professional Photo Editing' 
                subtitle='Retouch - Color Adjustment - Object removal'
                image={bannerImage}
            />

            <Steps list={steps} />

            <ColorAdjustment section={services[0]} />

            <section className='photo-editing portrait'>
                <CheckList title={services[1].title} list={services[1].services} /> 
            </section>

            <section className='photo-editing portrait'>
                <CheckList title={services[2].title} list={services[2].services} /> 
            </section>

            <section className='photo-editing portrait'>
                <CheckList title={services[3].title} list={services[3].services} /> 
            </section>

            <section className='photo-editing portrait'>
                <CheckList title={services[4].title} list={services[4].services} /> 
            </section>

        </main>
    )
}

export default PhotoEditing
