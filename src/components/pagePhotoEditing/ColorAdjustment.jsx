import React from 'react';
import BeforeAfter from './BeforeAfter';
const before = { 
    img: require('../../assets/images/before.jpg').default,
    description: 'Before'
};
const after = {
    img: require('../../assets/images/after.jpg').default,
    description: 'After'
}

const ColorAdjustment = () => {
    return (
        <section className='inner flex-justify full-screen'>       
            <div className='text'>
                <h2 className='font1'>Color Adjustment</h2>
            </div>
            <BeforeAfter before={before} after={after} />
        </section>
    )
}

export default ColorAdjustment;
