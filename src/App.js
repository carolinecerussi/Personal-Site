import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Footer from '../src/Footer';
import Back from './Back';
import Attempt from './Attempt';
import Slide from './SlideBanner';
import Grids from './Components/ProjectGrid';
import LightUp from './Components/lightUp';

function App() {

  
  return (
<React.Fragment>
<Back />
<Slide />
  <Header />
  <AboutMe />
  {/* <Attempt /> */}
  <Grids />

  <LightUp />
  <Footer />
</React.Fragment>    
  );
}

export default App;
