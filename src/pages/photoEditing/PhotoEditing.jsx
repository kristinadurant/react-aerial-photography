import React from 'react';
import { Helmet } from 'react-helmet';
import { Banner, Steps, CheckList, BeforeAfter } from '../../components';
import { bannerImage, steps, services } from './Content';

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

            {services.map(section => {
                return (
                    <section key={section.title} className='photo-editing padding'>     
                        <div className='inner flex-justify'> 
                            <CheckList title={section.title} list={section.services} />
                            <BeforeAfter before={section.before} after={section.after} />
                        </div> 
                    </section>
                )
            })}

        </main>
    )
}

export default PhotoEditing
