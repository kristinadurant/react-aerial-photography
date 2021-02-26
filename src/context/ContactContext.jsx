import React, { createContext, useState } from 'react';

const ContactContext = createContext({});

const ContactContextProvider = ({ children }) => {

    const OPTIONS = {
        message: 'Send a Message' ,
        schedule: 'Schedule an Aerial Photo & Video Shoot',
        inquiry: 'Inquiry About Photos & Videos',
        editing: 'Professional Photo Editing'
    };

    const [ option, setOption ] = useState('message');

  return (
    <ContactContext.Provider value={{ option, setOption, OPTIONS}}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactContextProvider };