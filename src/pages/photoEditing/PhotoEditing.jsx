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
