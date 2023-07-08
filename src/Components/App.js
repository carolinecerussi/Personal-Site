import Header from './Header';
import React from 'react';
import AboutMe from './AboutMe';
import Grids from './ProjectGrid';
import 'reactjs-popup/dist/index.css';
import Rainbow from './Rainbow';
import Back from './Background';
import Slide from './SlideBanner';
function App() {

  
  return (
<React.Fragment>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<Back />
<Slide  />
  <Header/>
  <Rainbow />
  <AboutMe />
  <Rainbow />
  <Grids />
  <Rainbow />

</React.Fragment>    
  );
}

export default App;
