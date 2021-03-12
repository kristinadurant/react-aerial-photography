import React from 'react';

const Subscribe = () => {

    function handleSubmit() {
        
    }

    return (
        <div>
            <h3>Don't miss new Photos and Videos</h3>
            <p>Subscribe to our newsletter</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email' className='hide'>
                        Email Subscription
                    </label>
                    <input type='email' id='email' required aria-label='required' placeholder='Enter your email here...'/>
                </div>
                <button className='button secondary' type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe;
