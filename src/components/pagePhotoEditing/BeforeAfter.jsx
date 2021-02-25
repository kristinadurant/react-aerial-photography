import React, { useState } from 'react';
const before = require('../../assets/images/before.jpg');
const after = require('../../assets/images/after.jpg');

const BeforeAfter = () => {
    const [clip, setClip] = useState(70);

    return (
        <div className='before-after'>

            <div className='image' style={{ minWidth: '500px'}}>
                <img 
                    className='before' src={before.default}
                />
                <img 
                    className='after' src={after.default}
                    style={{ clipPath: `inset(0 0 0 ${clip}%)`, transition: 'all 1s'}}
                />
            </div>

            <div className='buttons'>
                    <button onClick={() => setClip(0)}>
                        <i className="fas fa-caret-left fa-2x"></i>
                    </button>

                    <button onClick={() => setClip(100)}>
                        <i className="fas fa-caret-right fa-2x"></i>               
                    </button>
            </div>     

        </div>      
    )
}

export default BeforeAfter;
