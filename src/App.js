import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/css/style.css';
import './style/css/responsive.css';
import ScrollToTop from './ScrollToTop';
import { Header, Footer } from './components';
import * as pages from './pages';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Switch>
            <Route exact path='/' component={pages.Home} /> 
            <Route exact path='/gallery' component={pages.Gallery} /> 
            <Route exact path='/aerial-photo-video-shoot' component={pages.Photoshoot} />
            <Route exact path='/professional-photo-editing' component={pages.PhotoEditing} />
            {/* <Route exact path='/frequently-asked-questions' component={FAQ} /> */}
            <Route component={pages.NotFound} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
