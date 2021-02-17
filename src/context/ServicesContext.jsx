import React, { createContext, useState } from 'react';

const ServicesContext = createContext({});

const ServicesContextProvider = ({ children }) => {
  const [service, setService] = useState(1);

  const services = [
    { id: 0, description: 'Photoshop', img: 'brickell.jpg'},
    { id: 1, description: 'Portraits', img: 'portrait.jpg'},
    { id: 2, description: 'Aerial Videos of Properties', img: 'brickell.jpg'},
    { id: 3, description: 'Unique Prints', img: 'zion.jpg'}  
]
  return (
    <ServicesContext.Provider value={{ service, setService, services }}>
      {children}
    </ServicesContext.Provider>
  );
};

export { ServicesContext, ServicesContextProvider };