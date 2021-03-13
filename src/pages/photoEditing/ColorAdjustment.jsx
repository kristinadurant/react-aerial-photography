import React from 'react';
import { BeforeAfter, CheckList } from '../../components';

const ColorAdjustment = ({ section, name }) => {
    const { title, services, before, after } = section;

    return (
        <section className={`photo-editing ${name}`}>     
            <BeforeAfter before={before} after={after} />
            <div className='text'>
                <CheckList title={title} list={services} />
            </div>
        </section>
    )
}

export default ColorAdjustment;
