import React from 'react';


const Banner = ({ title, image, children }) => {

    return (
        <section 
            className='banner full-screen'
            style={{ backgroundImage: `url(${image.default}`}}
        >
            <div className='overlay flex-center'>
                <div className='inner '>
                    <h1>{title}</h1>
                    {children}
                </div>   
            </div>
        </section>
    )
}

export default Banner;
