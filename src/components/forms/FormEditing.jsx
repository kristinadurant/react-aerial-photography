import React from 'react';
import { InputText, InputTextarea, InputFile } from './components';

const FormEditing = () => {

    return (
        <>
            <InputText label='Name' id='name' required />
            <InputText label='Email' id='email' required type='email' />
            <fieldset className='input-files'>
                <legend>
                    Upload images (Max 20MB Each) <strong title="required" aria-label='required'>*</strong>
                </legend>
                {[1,2,3,4,5].map(i => <InputFile key={i} label='Image' id='file1' />)}            
            </fieldset>
            <InputTextarea label='Message/Questions' />
        </>
    )
}

export default FormEditing;
