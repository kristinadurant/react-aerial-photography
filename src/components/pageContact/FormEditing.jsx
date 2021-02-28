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
        </>
    )
}

export default FormEditing;
