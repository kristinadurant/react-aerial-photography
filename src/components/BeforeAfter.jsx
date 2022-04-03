import React, { useState } from 'react';
import { Hidden } from '../styledComponents/elements';

const BeforeAfter = ({ before, after }) => {
    const [clip, setClip] = useState(50);

    return (
        <div className='before-after'>

            <div className='image' style={{ cursor: 'pointer'}}>
                <img 
                    onClick={() => setClip(90)}
                    className='before' src={before.img} alt={before.description + ' before editing'}
                    style={{ cursor: clip<90? 'pointer': 'initial'}}
                />
                <img 
                    onClick={() => setClip(10)}
                    className='after' src={after.img} alt={after.description + ' after editing'}
                    style={{ 
                        clipPath: `polygon(${2*clip}% 0%,100% 0%,100% 100%,0% 100%,0% ${2*clip}%, ${clip}% ${clip}%)`, 
                        transition: 'all 1s',
                        cursor: clip>10? 'pointer': 'initial'
                    }}
                />
            </div>

            <div className='buttons'>
                    <button className='square' onClick={() => setClip(10)} title='Before'>
                        <Hidden>Before</Hidden>
                        <i className="fas fa-caret-left fa-2x"></i>
                    </button>

                    <button className='square' onClick={() => setClip(90)} title='After'>
                        <i className="fas fa-caret-right fa-2x"></i>   
                        <Hidden>After</Hidden>            
                    </button>
            </div>     

        </div>      
    )
}

export default BeforeAfter;
