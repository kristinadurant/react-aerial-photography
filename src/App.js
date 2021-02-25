import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/css/style.css';
import './style/css/responsive.css';
import ScrollToTop from './ScrollToTop';
import { Header, Footer } from './components';
import { Home, Gallery, About } from './pages';
import { AppContextProvider } from './context/AppContext';

function App() {
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContextProvider>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/gallery' component={Gallery} /> 
            <Route exact path='/about-pierre-photographer' component={About} />
        </Switch>
      </AppContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
