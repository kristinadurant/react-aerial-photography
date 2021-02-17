import React, { createContext, useState } from 'react';

const ServicesContext = createContext({});

const ServicesContextProvider = ({ children }) => {
  const [service, setService] = useState(1);

  return (
    <ServicesContext.Provider value={{ service, setService }}>
      {children}
    </ServicesContext.Provider>
  );
};

export { ServicesContext, ServicesContextProvider };