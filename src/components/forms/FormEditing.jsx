import React, { useEffect, useState } from 'react';
import { InputText, InputTextarea, InputFile } from './components';

const FormEditing = () => {
    const [number, setNumber] = useState(1);
    const [hmtlUpload, setHtmlUpload] = useState([]);
    const [images, setImages] = useState(null);
console.log(images)
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
            <InputText label='Name' id='name' required />
            <InputText label='Email' id='email' required type='email' />
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

            <fieldset className='input-files'>
                <legend>
                    Upload images <strong title="required" aria-label='required'>*</strong>
                </legend>
                {/* <div><input type='file' accept='.jpg, .jpeg' id='upload-photos' name='upload-photos'
                    onChange={(e) => setImages(URL.createObjectURL(e.target.files[0]))}
                /></div>  */}
                <InputFile label='Image' id='file1' />
                <InputFile label='Image' id='file2' />
                <InputFile label='Image' id='file3' />
            </fieldset>
            <InputTextarea label='Message/Questions' />
        </>
    )
}

export default FormEditing;
