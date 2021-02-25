import React from 'react';

const Subscribe = () => {

    function handleSubmit() {
        
    }

    return (
        <div>
            <h3>Don't miss new Photos and Videos</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>
                        Email:
                    </label>
                    <input type='email' id='email' name='email' required />
                </div>
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe;
