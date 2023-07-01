import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Home from './Home';
import Back from './Back';
import Grids from './Components/ProjectGrid';
import 'reactjs-popup/dist/index.css';
import Pop from './Components/Pop';


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
