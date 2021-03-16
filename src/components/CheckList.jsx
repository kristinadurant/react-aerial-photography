import React from 'react';

const CheckList = ({ title, list }) => {

    return (
        <ul className='check-list'>
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

export default CheckList;
