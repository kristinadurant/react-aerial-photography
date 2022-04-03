
const pathTo = img => require(`../../assets/images/${img}`);
export const before = { img: pathTo('photoEditing/before.jpg'), description: 'before'};
export const after = { img: pathTo('photoEditing/after.jpg'), description: 'after'};
export const photoEditing = [ 
    'Color Adjustment', 'Background manipulation',
    'Portrait Retouching', 'Body Retouching', 'Photo Restauration'
];
export const aerialShoots = 'Drone Photography and Videography has become widely used for different purposes. We can help you create better visuals of memorable moments, high quality property 3D tours or any other project you might have in mind.'
export const gallery = 'Bookmark all the images and videos that you like and send an inquiry. Depending on the images and quantity we will provide you with a price for downloading all images and individual prices.';
export const galleryImages = [
    { alt: 'Creative 3D tours of your properties', url: pathTo('brickell.jpg'), title: 'Bookmark'},
    { alt: 'Video Shoots with Breathtaking views', url: pathTo('IMG_1495.jpg'), title: 'Send an Inquiry'},
    { alt: 'Video Shoots with Breathtaking views', url: pathTo('zion.jpg'), title: 'Download'}  
]