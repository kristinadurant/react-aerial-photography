import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/css/style.css';
import './style/css/responsive.css';
import ScrollToTop from './ScrollToTop';
import { Header, Footer } from './components';
import { Home, Gallery, Photoshoot, PhotoEditing } from './pages';
import { BookmarksContextProvider } from './context/BookmarksContext';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <BookmarksContextProvider>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/gallery' component={Gallery} /> 
            <Route exact path='/aerial-photo-video-shoot' component={Photoshoot} />
            <Route exact path='/professional-photo-editing' component={PhotoEditing} />
            {/* <Route exact path='/frequently-asked-questions' component={FAQ} /> */}
        </Switch>
      </BookmarksContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
