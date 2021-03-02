import React from 'react'

const FormMessage = () => {
    return (
        <div>
            <label htmlFor='message' className='required'>
                Questions/Comments
            </label>
            <textarea id='message' name='message' rows="4" required/>
        </div>
    )
}

export default FormMessage
