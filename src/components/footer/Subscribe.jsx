import React from 'react';

const Subscribe = () => {

    function handleSubmit() {
        
    }

    return (
        <div>
            <h3>Don't miss new Photos and Videos</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email' className='hide'>
                        Email:
                    </label>
                    <input type='email' id='email' name='email' required aria-hidden='true' placeholder='Enter your email here...'/>
                </div>
                <button className='button secondary' type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe;
