import React from 'react';

const FormEditing = () => {
    return (
        <>
            <div>
                <label>
                    Number of Photos to be editted:
                </label>
                <input type='number'/>
            </div>

            <div>
                <label>
                    Upload files
                </label>
                <input type='file' accept='.jpg, .jpeg' />
            </div>

            <div>
                <label htmlFor='message' className='required'>
                Tell us a bit more about edits you would like to implement
                </label>
                <textarea id='message' name='message' rows="4" required/>
            </div>
        </>
    )
}

export default FormEditing;
