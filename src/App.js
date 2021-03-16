import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/css/style.css';
import './style/css/responsive.css';
import ScrollToTop from './ScrollToTop';
import { Header, Footer } from './components';
import { Home, Gallery, About, Photoshoot, PhotoEditing, Contact, FAQ } from './pages';
import { BookmarksContextProvider } from './context/BookmarksContext';

function App() {
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <BookmarksContextProvider>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/gallery' component={Gallery} /> 
            <Route exact path='/about-pierre-photographer' component={About} />
            <Route exact path='/aerial-photo-video-shoot' component={Photoshoot} />
            <Route exact path='/professional-photo-editing' component={PhotoEditing} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/frequently-asked-questions' component={FAQ} />
        </Switch>
      </BookmarksContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
