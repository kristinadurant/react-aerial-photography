import React, { useState } from 'react';

const BeforeAfter = ({ before, after }) => {
    const [clip, setClip] = useState(50);

    return (
        <div className='before-after'>

            <div className='image'>
                <img 
                    className='before' src={before.img} alt={before.description}
                />
                <img 
                    className='after' src={after.img} alt={after.description}
                    style={{ 
                        clipPath: `polygon(${2*clip}% 0%,100% 0%,100% 100%,0% 100%,0% ${2*clip}%, ${clip}% ${clip}%)`, 
                        transition: 'all 1s'
                    }}
                />
            </div>

            <div className='buttons'>
                    <button className='square' onClick={() => setClip(0)}>
                        <i className="fas fa-caret-left fa-2x"></i>
                    </button>

                    <button className='square' onClick={() => setClip(100)}>
                        <i className="fas fa-caret-right fa-2x"></i>               
                    </button>
            </div>     

        </div>      
    )
}

export default BeforeAfter;
