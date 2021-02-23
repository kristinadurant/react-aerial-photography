import React from 'react';
const images = [
    { id: 0, description: 'Portraits', url: 'IMG_1495.jpg'},
    { id: 1, description: 'Aerial Videos of Properties', url: 'DJI_0164.jpg'},
    { id: 2, description: 'Photoshop', url: 'IMG_1531.jpg'},
    { id: 3, description: 'Unique Prints', url: 'DJI_0167.jpg'},
    { id: 4, description: 'Unique Prints', url: 'DJI_0145.jpg'},
    { id: 5, description: 'Portraits', url: 'IMG_1495.jpg'},
    { id: 6, description: 'Aerial Videos of Properties', url: 'DJI_0164.jpg'},
    { id: 7, description: 'Photoshop', url: 'IMG_1531.jpg'},
    { id: 8, description: 'Unique Prints', url: 'DJI_0167.jpg'},
    { id: 9, description: 'Unique Prints', url: 'DJI_0145.jpg'},
    { id: 10, description: 'Portraits', url: 'IMG_1495.jpg'},
    { id: 11, description: 'Aerial Videos of Properties', url: 'DJI_0164.jpg'},
    { id: 12, description: 'Photoshop', url: 'IMG_1531.jpg'},
    { id: 13, description: 'Unique Prints', url: 'DJI_0167.jpg'},
    { id: 14, description: 'Unique Prints', url: 'DJI_0145.jpg'},
    { id: 15, description: 'Portraits', url: 'IMG_1495.jpg'},
    { id: 16, description: 'Aerial Videos of Properties', url: 'DJI_0164.jpg'},
    { id: 17, description: 'Photoshop', url: 'IMG_1531.jpg'},
    { id: 18, description: 'Unique Prints', url: 'DJI_0167.jpg'},
    { id: 20, description: 'Unique Prints', url: 'DJI_0145.jpg'},
    { id: 21, description: 'Portraits', url: 'IMG_1495.jpg'},
    { id: 22, description: 'Aerial Videos of Properties', url: 'DJI_0164.jpg'},
    { id: 23, description: 'Photoshop', url: 'IMG_1531.jpg'},
    { id: 24, description: 'Unique Prints', url: 'DJI_0167.jpg'}
];

const Images = () => {
    return (
        <section className='gallery'>
            {images.map(img => {
                return (
                    <div key={img.id} className='container'>
                        <img src={require(`../../assets/images/${img.url}`).default} alt={img.description} height='auto' width='100%' />
                    </div>
                )
            })}
        </section>
    )
}

export default Images
