import React from 'react';
import { BeforeAfter, CheckList } from '../../components';

const ColorAdjustment = ({ section }) => {
    const { title, services, before, after } = section;

    return (
        <section className='photo-editing color-adjustment'>     
            <div className='inner'> 
                <BeforeAfter before={before} after={after} />
                <CheckList title={title} list={services} />         
            </div> 
        </section>
    )
}

export default ColorAdjustment;
