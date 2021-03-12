import React, { useEffect, useState } from 'react';

const FormEditing = () => {
    const [number, setNumber] = useState(1);
    const [hmtlUpload, setHtmlUpload] = useState([]);

    useEffect(() =>{
        setHtmlUpload([]);
        const html = [];
        for (let i = 1; i <= number; i++) {
            html.push(<div key={i}><input type='file' accept='.jpg, .jpeg' id='upload-photos' name='upload-photos'/></div>);
        }
        setHtmlUpload(html);
    }, [number]);

    return (
        <>
            <div>
                <label htmlFor='number-of-photos'>
                    Number of Photos to be editted <strong title="required" aria-label='required'>*</strong>
                </label>
                <input 
                    type='number' id='number-of-photos' name='number-of-photos' 
                    required min='1' max='10' 
                    value={number} onChange={(e) => setNumber(e.target.value)}
                />
            </div>

            <fieldset>
                <legend>
                    Upload files <strong title="required" aria-label='required'>*</strong>
                </legend>
                <div>{hmtlUpload}</div>        
            </fieldset>

            <div>
                <label htmlFor='message'>
                    Tell us a bit more about edits you would like to implement 
                    <strong title="required" aria-label='required'> *</strong>
                </label>
                <textarea id='message' name='message' rows="4" required/>
            </div>
        </>
    )
}

export default FormEditing;
