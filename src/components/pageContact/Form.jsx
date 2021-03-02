import React, { useState } from 'react';
// import { db } from '../../firebase';

const Form = ({ children }) => {
    const [loading, setLoading] = useState(false);  

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
                    Name
                </label>
                <input type='text' id='name' name='name' required autoFocus/>
            </div>
            <div>
                <label htmlFor='email' className='required'>
                    Email
                </label>
                <input type='email' id='email' name='email' required />
            </div>

            { children }

            <button type='submit' className='button secondary' disabled={loading}>Send</button>

        </form>
    )
}

export default Form
