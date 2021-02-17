import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './style/style.css';
import { Header, Banner } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Banner />
      </main>
    </BrowserRouter>
  );
}

export default App;
