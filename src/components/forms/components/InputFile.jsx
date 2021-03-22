import React, { useState } from 'react';
import { InputTextarea } from '.'

const InputFile = ({ id, label }) => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = e => {
        // 20MB = 20971520B
        if(e.target.files[0].size > 20971520) return alert('too big');
        setImage(e.target.files[0]);
        setPreview({backgroundImage: `url(${URL.createObjectURL(e.target.files[0])})`});        
    }

    return (
        <div className='container'>
            <div className='background-image' style={preview && preview}>
                <input 
                    className='hide' type='file' accept='.jpg, .jpeg'
                    id={id} name={label} onChange={handleChange}    
                />
                <label htmlFor={id}>
                    {label}  
                </label>

            </div>
            <InputTextarea label='Describe edits' rows='3' placeholder='Describe edits...'/>
        </div>
    )
}

export default InputFile;
