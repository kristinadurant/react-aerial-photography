import React from 'react';
import PhotoEditingImages from './PhotoEditingImages';
import PhotoEditingList from './PhotoEditingList';

const PhotoEditing = () => {

    return (
        <section id='services' className='full-screen'>
            <div className='inner'>
                <div>
                    <h2 className='font1'>Proffesional Photo Editing</h2>
                    <PhotoEditingImages />
                </div>
                <div>
                    <PhotoEditingList />
                    <p className='note'>* Video and Photo Shoots are available only in Miami, FL.</p>
                </div>
            </div>
        </section>
    )
}

export default PhotoEditing;
