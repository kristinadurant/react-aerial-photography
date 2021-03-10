import React from 'react'

const FormMessage = () => {
    return (
        <div>
            <label htmlFor='message'>
                Questions/Comments <strong title="required" aria-label='required'>*</strong>
            </label>
            <textarea id='message' name='message' rows="4" required/>
        </div>
    )
}

export default FormMessage
