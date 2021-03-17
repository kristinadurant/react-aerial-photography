import React from 'react';
import { InputText, InputTextarea } from './components';

const FormSchedule = () => {
    return (
        <>
            <InputText label='Name' id='name' required />
            <InputText label='Email' id='email' required type='email' />
            <div>
                <label htmlFor='date'>
                    Date of Photo/Video Shoot <strong title="required" aria-label='required'>*</strong>
                </label>
                <input 
                    type="date" required
                    id='date' name='date'
                    data-date-inline-picker="true"
                />
            </div>
            <InputTextarea label='Tell us a bit more about yourself or your project' required/>
        </>
    )
}

export default FormSchedule
