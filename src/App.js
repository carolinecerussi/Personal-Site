import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Footer from '../src/Footer';
import Back from './Back';
import Attempt from './Attempt';
import Slide from './SlideBanner';



function App() {

  
  return (
<React.Fragment>
<Back />
<Slide />
  <Header />
  <AboutMe />
  <Attempt />
  <Footer />
</React.Fragment>    
  );
}

export default App;
