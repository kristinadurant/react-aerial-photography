import React from 'react';
import { Banner, Steps, CheckList, BeforeAfter } from '../../components';
import { bannerImage, steps, services } from './Content';

const PhotoEditing = () => {
    return (
        <main className='photo-editing-page'>

            <Banner title='Professional Photo Editing' image={bannerImage}>
                <p className='font2' style={{ fontWeight: 'bold'}}>
                    Retouch - Color Adjustment - Object removal
                </p>
            </Banner>

            <section className='full-screen'>
                <div className='inner'>
                    <Steps list={steps} />
                </div>
            </section>

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
