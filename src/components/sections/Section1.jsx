import './style.css';
import React from 'react';

const Section1 = ({ name, url, alt, children }) => {

    return (
        <section className={`layout-1 ${name}`}>              
            <div className='image'>
                <img 
                    src={url} alt={alt}
                    width='400px' height='468px' 
                />
            </div>
            <div className='text'>
                {children}
            </div>
        </section>
    )
}

export default Section1
