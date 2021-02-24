import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/css/style.css';
import './style/css/responsive.css';
import { Header, Footer } from './components';
import { Home, Gallery } from './pages';
import { GalleryContextProvider } from './context/GalleryContext';

function App() {
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });

  return (
    <BrowserRouter>
      <GalleryContextProvider>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/gallery' component={Gallery} /> 
        </Switch>
      </GalleryContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
