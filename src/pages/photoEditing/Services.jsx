function pathTo(img) { return require(`../../assets/images/photoEditing/${img}`).default };

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
