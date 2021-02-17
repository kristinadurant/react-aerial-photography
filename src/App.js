import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/style.css';
import { Header, Footer } from './components';
import { Home, Gallery } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/gallery' component={Gallery} /> 
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
