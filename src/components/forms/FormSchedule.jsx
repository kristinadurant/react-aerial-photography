import React from 'react'

const FormSchedule = () => {
    return (
        <>
            <div>
                <label htmlFor='date' className='required'>
                    Date of Photo/Video Shoot
                </label>
                <input 
                    type="date" required
                    id='date' name='date'
                    data-date-inline-picker="true"
                />
            </div>
            <div>
                <label htmlFor='message' className='required'>
                    Tell us a bit more about yourself or your project
                </label>
                <textarea id='message' name='message' rows="4" required/>
            </div>
        </>
    )
}

export default FormSchedule
