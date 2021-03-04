import React from 'react';

const CheckList = ({ title, list }) => {

    return (
        <div className='text'>
            <h2 className='font1'>{title}</h2>
            <ul className='font2 check-list'>
                {list.map((item, key) => {
                    return (
                        <li key={key}>
                            <span className='checkmark'><i /></span>
                            <span>{item}</span>
                        </li>
                )})}
            </ul>
        </div>
    )
}

export default CheckList;
