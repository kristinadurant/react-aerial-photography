import React from 'react';

const Form = () => {

const handleSubmit = () => {
    
}

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name' className='required'>
                    Name:
                </label>
                <input type='text' id='name' name='name' required />
            </div>
            <div>
                <label htmlFor='email' className='required'>
                    Email:
                </label>
                <input type='email' id='email' name='email' required />
            </div>
            <div>
                <label htmlFor='message' className='required'>Message:</label>
                <textarea id='message' name='message' rows="4" required/>
            </div>
            <button type='submit'>Send Message</button>
        </form>
    )
}

export default Form
