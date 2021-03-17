import React from 'react';

const InputTextarea = ({id, label, ...rest}) => {
    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>
            <textarea id={id} name={label} rows='5' {...rest} />
        </div>
    )
}

export default InputTextarea;