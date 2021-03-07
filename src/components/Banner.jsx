import React from 'react';


const Banner = ({ title, subtitle, image, children }) => {

    return (
        <section 
            className='banner full-screen background-image'
            style={{ backgroundImage: `url(${image.default}`}}
        >
            <div className='overlay'>
                <div className='inner '>
                    <h1>{title}</h1>
                    <p className='font2' style={{ fontWeight: 'bold'}}>{subtitle}</p>
                    {children}
                </div>   
            </div>
        </section>
    )
}

export default Banner;
