import Header from './Header';
import React from 'react';
import AboutMe from './AboutMe';
import Grids from './ProjectGrid';
import 'reactjs-popup/dist/index.css';
import Rainbow from './Rainbow';
import Back from './Background';
import Slide from './SlideBanner';
import Screen from '../scripts';
import Footer from './Footer.js';
import NavBar from './NavBar';

function App() {
  

  
  return (
<React.Fragment>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<NavBar />
<Back />
  <Header/>
</React.Fragment>   
  );
}

export default App;
