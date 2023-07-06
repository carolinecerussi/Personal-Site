import Header from './Header';
import React from 'react';
import AboutMe from './AboutMe';
import Button from './Home';
import Grids from './ProjectGrid';
import 'reactjs-popup/dist/index.css';
import Slide from './SlideBanner';
import Rainbow from './Rainbow';
function App() {

  
  return (
<React.Fragment>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<Button/>

<Slide />
  <Header />
  <Rainbow />
  <AboutMe />
  <Rainbow />
  <Grids />
  <Rainbow />

</React.Fragment>    
  );
}

export default App;
