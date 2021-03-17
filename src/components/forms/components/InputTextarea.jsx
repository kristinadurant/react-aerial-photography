import React from 'react';

const InputTextarea = ({label, ...rest}) => {
    return (
        <div>
            <label htmlFor='message'>
                {label}
            </label>
            <textarea id='message' name={label} rows='4' {...rest} />
        </div>
    )
}

export default InputTextarea;