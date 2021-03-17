import React, { useState } from 'react';
import { db } from '../../firebase';

const Form = ({ title, children }) => {
    const [loading, setLoading] = useState(false);  
    const [ formData, setFormData] = useState({});

    const handleSubmit = async (e) => {
        const form = e.target;
        e.preventDefault();
        setLoading(true);
        console.log('su');
        db.collection("emails").add(formData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            setFormData({});
            form.reset();
        })
        .catch((error) => {
            console.log(error);      
        });
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='font1'>{title}</h2>

            

            { children }

            <button type='submit' className='button secondary' disabled={loading}>Send</button>

        </form>
    )
}

export default Form
