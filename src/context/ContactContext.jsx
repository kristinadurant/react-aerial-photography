import React, { createContext, useState } from 'react';

const ContactContext = createContext({});

const ContactContextProvider = ({ children }) => {

    const [ option, setOption ] = useState('message');

  return (
    <ContactContext.Provider value={{ option, setOption }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactContextProvider };