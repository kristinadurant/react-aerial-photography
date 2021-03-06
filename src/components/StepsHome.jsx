import React from 'react';
import { Link } from 'react-router-dom';

const StepsHome = ({ subTitle, title, list, link }) => {
    return (
        <div>

            {title && 
                <h2 style={{ fontSize: '1em'}}>
                    <p className='font2'>{subTitle}</p>
                    <p className='font1'>{title}</p>
                </h2>
            }   

            <ol className='steps-home'> 
                {list.map(( li, key) => {
                    return (
                        <li key={key}>
                            <span>{li}</span>
                        </li>
                )})}
            </ol>

            {link && <Link to={link.url}>{link.text}</Link>}
            
        </div>
    )
}

export default StepsHome;
