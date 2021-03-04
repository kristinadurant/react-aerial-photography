import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <section className='gallery full-screen'>
            <div className='inner padding'>
                <div>
                    <h2 style={{ fontSize: '1em'}}>
                        <p className='font2'>High Resolution</p>
                        <p className='font1'>Photos & Videos</p>
                    </h2>
                    <ol className='steps'> 
                        <li><span>Bookmark Images</span></li>
                        <li><span>Send an Inquiry</span></li>
                        <li><span>Choose type of Payment</span></li>
                        <li><span>Receive High Resolution Files</span></li>
                    </ol>
                    <Link to='/gallery'>View Gallery</Link>
                </div>
            </div>
        </section>
    )
}

export default Gallery;
