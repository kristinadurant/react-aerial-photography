import React from 'react'
import appLocalization from '../../assets/localization'
import { Textarea } from '../../styledComponents/elements'


const TestimonialForm = () => {
    function handleSubmit() {
        
    }

  return (
    <div>
        <h3>{appLocalization.testimonialFormTitle}</h3>
        <form onSubmit={handleSubmit}>
                <div>
                    <input id='name' required aria-label='required' placeholder='Your name'/>
                    <Textarea id='testimonial-text' rows="4" required aria-label='required' placeholder='Describe your experience here...'/>
                </div>
                <button className='button secondary' type='submit'>{appLocalization.testimonialFormButtonText}</button>
        </form>
    </div>
  )
}

export default TestimonialForm