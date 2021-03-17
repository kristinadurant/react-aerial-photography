import React, { useState } from 'react';

const ListItem = ({id, q, a}) => {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <p>
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
            </p>
            <p id={id} className={open && 'open'} aria-hidden={!open}>{a}</p>
        </li>
    )
}

export default ListItem
