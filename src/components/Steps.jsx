import React from 'react';

const Steps = ({ list }) => {
    return (
        <section className='steps padding'>
            <div className='inner'>
                <ol> 
                    {list.map(( li, key) => {
                        return (
                            <li key={key}>
                                <span className='number'>0{key+1}</span>
                                <span className='text'>{li}</span>
                            </li>
                    )})}
                </ol>
            </div>
        </section>
    )
}

export default Steps;
