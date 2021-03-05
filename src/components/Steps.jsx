import React from 'react';
import { Link } from 'react-router-dom';

const Steps = ({ list }) => {
    return (
        <div>
            <h2 style={{ fontSize: '1em'}}>
                <p className='font2'>High Resolution</p>
                <p className='font1'>Photos & Videos</p>
            </h2>
                
            <ol className='steps'> 
                {list.map(( li, key) => {
                    return (
                        <li key={key}>
                            <span>{li}</span>
                        </li>
                )})}
            </ol>

            <Link to='/gallery'>View Gallery</Link>
        </div>
    )
}

export default Steps;
