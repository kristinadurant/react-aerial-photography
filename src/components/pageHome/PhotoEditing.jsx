import React from 'react';
import PhotoEditingList from './PhotoEditingList';
import BeforeAfter from '../pagePhotoEditing/BeforeAfter';

const before = { img: require('../../assets/images/photoEditing/before.jpg').default, title: 'before'};
const after = { img: require('../../assets/images/photoEditing/after.jpg').default, title: 'before'};

const PhotoEditing = () => {

    return (
        <section className='full-screen photo-editing'>
            <div className='inner flex-justify'>
                               
                <BeforeAfter before={before} after={after} />

                <div>        
                    <h2 className='font1'>Proffesional Photo Editing</h2>           
                    <PhotoEditingList />
                </div>
            </div>
        </section>
    )
}

export default PhotoEditing;
