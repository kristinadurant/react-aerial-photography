import React, { useState } from 'react';

const InputFile = ({ id, label, ...rest}) => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = e => {
        setImage(e.target.files[0]);
        setPreview({backgroundImage: `url(${URL.createObjectURL(image)})`});
        
    }

    return (
        <div className='background-image' style={preview && preview}>
            <input 
                className='hide'
                type='file' id={id} name={label} {...rest} 
                onChange={handleChange}    
            />
            <label htmlFor={id} tabIndex>
                {label}
                {rest.required && <strong title="required" aria-label='required'> *</strong>}   
            </label>

        </div>
    )
}

export default InputFile;
