import Header from './Header';
import React from 'react';
import AboutMe from './AboutMe';
import Button from './Home';
import Grids from './ProjectGrid';
import 'reactjs-popup/dist/index.css';
import Rainbow from './Rainbow';
import Back from './Background';

function App() {

  
  return (
<React.Fragment>
  <Back />
<Button />
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
