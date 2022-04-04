import React, { useState } from 'react'
import appLocalization from '../../assets/localization'
import { Textarea } from '../../styledComponents/elements'

const TestimonialForm = () => {
    const defaultForm = {name: "", testimonial: ""};
    const [formData, setFormData] = useState(defaultForm);

    const handleSubmit = e => {
        e.preventDefault();
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
          }
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", formData })
        })
            .then(() => { 
                setFormData(defaultForm);
                alert("Success!");}
            )
            .catch(error => alert(error));
  
        
      };
  
    const  handleChange = e => setFormData({...formData, [e.target.name]: e.target.value });

  return (
    <div>
        <h3>{appLocalization.testimonialFormTitle}</h3>
        <form name="testimonials" method="POST" onSubmit={handleSubmit}>
            <div>
                <input 
                    value={formData.name} 
                    name="name" 
                    id='name' 
                    required 
                    aria-label='required' 
                    placeholder='Your name' 
                    onChange={handleChange}
                />
                <Textarea 
                    value={formData.testimonial} 
                    name="testimonial" 
                    id='testimonial-text' 
                    rows="4" 
                    required 
                    aria-label='required' 
                    placeholder='Describe your experience here...'
                    onChange={handleChange}
                />
            </div>
            <button className='button secondary' type='submit'>
                {appLocalization.testimonialFormButtonText}
            </button>
        </form>
    </div>
  )
}

export default TestimonialForm