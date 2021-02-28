import React from 'react';

const PhotoEditingList = () => {
    const list = [ 
        'Color Enhancement', 'Fixing lighting issues',
        'Unnecessary props removal', 'Background editing',
        'Retouching', 'Editing out shadows'
    ];

    return (
        <ul className='font2 check-list'>
            {list.map((item, key) => {
                return (
                    <li key={key}>
                        <span className='checkmark'><i /></span>
                        <span>{item}</span>
                    </li>
            )})}
        </ul>
    )
}

export default PhotoEditingList;
