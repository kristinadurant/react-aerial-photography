import { Link } from 'react-router-dom';
function pathTo(img) { return require(`../../assets/images/photoEditing/${img}`).default };

export const steps = [
    <>Upload your sample images through our <Link to='/contact'>contact form</Link> or via email
        <a href='mailto: pierre.videophotographer@gmail.com'> pierre.videophotographer@gmail.com</a>.</>,
    'Receive a custom time and price quote according to editing complexity and photos quantity. Accept our quote and we will start editing your images right away.',
    'Review and approve editing. Submit a payment and download your images.'
];

export const services = [
    {
        title: 'Color Adjustment',
        services: ['Color adjustment', 'Saturation', 'Exposure' ],
        before: { img: pathTo('before.jpg'), description: 'before'},
        after: { img: pathTo('after.jpg'), description: 'before'}
    },
    {
        title: 'Portrait & Body Retouching',
        services: [
            'Skin smoothing', 'Hair removal',
            'Wrinkle removal', 'Makeup correction and enhancement',
            'Celulite removal', 'Body shape editing', 'Unwanted props removal'
        ]
    },
    {
        title: 'Background Manipulation',
        services: ['Background removal', 'Photomontage', 'Applying special effects'],
        before: { img: pathTo('before.jpg'), description: 'before'},
        after: { img: pathTo('after.jpg'), description: 'before'}
    }
]
