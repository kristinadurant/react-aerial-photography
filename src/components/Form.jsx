import React, { useState } from 'react';
// import { db } from '../firebase';

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };    

    const handleSubmit = async (e) => {
        const form = e.target;
        e.preventDefault();
        setLoading(true);
        // db.collection("emails").add(formData)
        // .then((docRef) => {
        //     console.log("Document written with ID: ", docRef.id);
        //     setFormData({});
        //     form.reset();
        // })
        // .catch((error) => {
        //     console.log(error);      
        // });
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor='name' className='required'>
                    Name:
                </label>
                <input onChange={handleChange} type='text' id='name' name='name' required />
            </div>
            <div>
                <label htmlFor='email' className='required'>
                    Email:
                </label>
                <input onChange={handleChange} type='email' id='email' name='email' required />
            </div>
            <div>
                <label htmlFor='message' className='required'>
                    Message:
                </label>
                <textarea onChange={handleChange} id='message' name='message' rows="4" required/>
            </div>

            <button type='submit' disabled={loading}>Send Message</button>

        </form>
    )
}

export default Form
