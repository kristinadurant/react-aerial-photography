import { Link } from 'react-router-dom';
function pathTo(img) { return require(`../../assets/images/photoEditing/${img}`).default };

export const bannerImage = require('../../assets/images/IMG_1531.jpg');

export const steps = [
    <>Upload your sample images through our <Link to='/contact'>contact form</Link> or via email
        <a href='mailto: pierre.videophotographer@gmail.com'> pierre.videophotographer@gmail.com</a>.</>,
    'Receive a custom time and price quote according to editing complexity and photos quantity. Accept our quote and we will start editing your images right away.',
    'Review and approve editing. Submit a payment and download your images.'
];

export const services = [
    {
        title: 'Portrait Retouching',
        services: ['Color adjustment', 'Skin smoothing', 'Makeup enhancement' ],
        before: { img: pathTo('before.jpg'), title: 'before'},
        after: { img: pathTo('after.jpg'), title: 'before'}
    },
    {
        title: 'Body Retouching',
        services: ['Color adjustment', 'Celulite removal', 'Body shape editing', 'Unwanted props removal'],
        before: { img: pathTo('before.jpg'), title: 'before'},
        after: { img: pathTo('after.jpg'), title: 'before'}
    },
    {
        title: 'Background Manipulation',
        services: ['Background removal', 'Photomontage', 'Applying special effects'],
        before: { img: pathTo('before.jpg'), title: 'before'},
        after: { img: pathTo('after.jpg'), title: 'before'}
    },
    {
        title: 'Photo Restoration',
        services: [''],
        before: { img: pathTo('before.jpg'), title: 'before'},
        after: { img: pathTo('after.jpg'), title: 'before'}
    }
]
