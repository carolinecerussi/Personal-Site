import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Home from './Home';
import Grids from './Components/ProjectGrid';
import 'reactjs-popup/dist/index.css';
import Slide from './SlideBanner';
function App() {

  
  return (

<React.Fragment>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<Home />
<Slide />
  <Header />
  <AboutMe />
  <Grids />

</React.Fragment>    
  );
}

export default App;
