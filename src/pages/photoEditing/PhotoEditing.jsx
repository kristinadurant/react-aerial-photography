import './style.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Banner, Steps, CheckList, Section1 } from '../../components';
// import { steps, services } from './Content';
import ColorAdjustment from './ColorAdjustment';
import PhotoRestauration from './PhotoRestauration';

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
                image={require('../../assets/images/IMG_1531.jpg')}
            />

            {/* <Steps list={steps} /> */}


            <div className='inner'>
                {/* <ColorAdjustment section={services[0]} name='color-adjustment' />

                <ColorAdjustment section={services[2]} name='background-manipulation' /> */}

                <Section1 
                    name='photo-editing portrait'
                    url={require('../../assets/images/photoEditing/portrait.jpg')}
                    alt='Photo with Portrait Retouch done'
                >
                    {/* <CheckList title={services[1].title} list={services[1].services} /> */}
                </Section1>

                <PhotoRestauration />

            </div>
        </main>
    )
}

export default PhotoEditing
