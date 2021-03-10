import React from 'react'

const FormSchedule = () => {
    return (
        <>
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
            <div>
                <label htmlFor='message'>
                    Tell us a bit more about yourself or your project <strong title="required" aria-label='required'>*</strong>
                </label>
                <textarea id='message' name='message' rows="4" required/>
            </div>
        </>
    )
}

export default FormSchedule
