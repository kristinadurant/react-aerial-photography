import React from 'react';

const FormEditing = () => {
    return (
        <>
            <div>
                <label htmlFor='number-of-photos' className='required'>
                    Number of Photos to be editted
                </label>
                <input type='number' id='number-of-photos' name='number-of-photos' required min='0'/>
            </div>

            <div>
                <label htmlFor='upload-photos' className='required'>
                    Upload files
                </label>
                <input type='file' accept='.jpg, .jpeg' id='upload-photos' name='upload-photos' required/>
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
