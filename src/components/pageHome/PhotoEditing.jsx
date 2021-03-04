import React from 'react';
import CheckList from '../index.js';
import BeforeAfter from '../pagePhotoEditing/BeforeAfter';

const before = { img: require('../../assets/images/photoEditing/before.jpg').default, title: 'before'};
const after = { img: require('../../assets/images/photoEditing/after.jpg').default, title: 'before'};

const PhotoEditing = () => {

    return (
        <section className='full-screen photo-editing'>
            <div className='inner flex-justify'>
                               
                <BeforeAfter before={before} after={after} />
        
                <CheckList title='Proffesional Photo Editing' />

            </div>
        </section>
    )
}

export default PhotoEditing;
