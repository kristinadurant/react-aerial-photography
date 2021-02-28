import React from 'react';
import BeforeAfter from './BeforeAfter';
import {services} from './Services';

const ColorAdjustment = () => {
    return (
        <>
        {services.map(section => {
            return (
                <section key={section.title} className='inner flex-justify full-screen'>       
                    <div className='text'>
                        <h2 className='font1'>{section.title}</h2>
                    </div>
                    <BeforeAfter before={section.before} after={section.after} />
                </section>
            )
        })}

        </>
    )
}

export default ColorAdjustment;
