import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Home from './Home';
import Back from './Back';
import Grids from './Components/ProjectGrid';

function App() {

  
  return (
<React.Fragment>
<Home />

  <Header />
  <AboutMe />
  <Grids />

</React.Fragment>    
  );
}

export default App;
