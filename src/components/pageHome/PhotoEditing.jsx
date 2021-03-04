import React from 'react';
import { CheckList, BeforeAfter } from '../';

const before = { img: require('../../assets/images/photoEditing/before.jpg').default, title: 'before'};
const after = { img: require('../../assets/images/photoEditing/after.jpg').default, title: 'before'};
const list = [ 
    'Color Enhancement', 'Fixing lighting issues',
    'Unnecessary props removal', 'Background editing',
    'Retouching', 'Editing out shadows'
];

const PhotoEditing = () => {

    return (
        <section className='full-screen photo-editing'>
            <div className='inner flex-justify'>
                               
                <BeforeAfter before={before} after={after} />
        
                <CheckList title='Proffesional Photo Editing' list={list} />

            </div>
        </section>
    )
}

export default PhotoEditing;
