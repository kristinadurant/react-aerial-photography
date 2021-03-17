import React, { useState } from 'react';

const ListItem = ({id, q, a}) => {
    const [open, setOpen] = useState(false);

    return (
        <li className={open && 'open'}>    
            <h2>
                <button 
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls={id}
                >
                    <span aria-hidden='true'>
                        {open? '-' : '+'}
                    </span>
                    {q}
                </button>
            </h2>
            <div><p id={id} aria-hidden={!open}>{a}</p></div>
        </li>
    )
}

export default ListItem
