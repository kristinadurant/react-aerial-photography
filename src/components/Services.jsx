import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id='services' className='padding'>
            <div>
                <h2 className='font2'>We Can Offer You Professional Video & Photo Services</h2>                   
            </div>
            <div className='blocks'>
                <div>
                    <h3>Download a Photo or Video</h3> 
                    <p>Our gallery includes high resolution photos and videos. 
                    Bookmark all the images and videos that you like and send an inquiry. 
                    Depending on the images and quantity we will provide you with a price for 
                    downloading all images and individual prices. </p>                                   
                    <Link to='/gallery'>
                        View Gallery
                    </Link>
                </div>
                <div>
                    <h3>Aerial Photo & Video Shoot</h3>
                    <p>Drone Photography and Videography has become widely used for different purposes. 
                    We can help you create better visuals of memorable moments, high quality property 3D tours or any other 
                    project you might have in mind.</p>
                    <Link to='/aerial-photo-video-shoot'>
                        Schedule Now
                    </Link>
                </div>
                <div>       
                    <h3>Photo Editing</h3>   
                    <p>You have photos but you want them to be perfect? We can help you with 
                        variety of photo editing tools. All you need to do is send us your photos, 
                        describe your desires and we will take care of you.</p>                                     
                    <Link to='/professional-photo-editing'>
                        View Services
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Services;
