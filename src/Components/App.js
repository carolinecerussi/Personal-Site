import Header from './Header';
import React from 'react';
import AboutMe from './AboutMe';
import ProjectGrid from './ProjectGrid';
import 'reactjs-popup/dist/index.css';
import Rainbow from './Rainbow';
import Back from './Background';
import Slide from './Slide';
import Screen from '../scripts';
import Footer from './Footer.js';
import NavBar from './NavBar';
import Fan from './Fan';
import DraggableThing from './Test';
import Dropdown from './Dropdown';
function App() {
  

  
  return (
<React.Fragment>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<Dropdown />
{/* <NavBar /> */}
<Back />
  <Header/>
  <Rainbow />
  <AboutMe>

  </AboutMe>
  <Rainbow />

  <DraggableThing />

        <Rainbow />
        <Footer />

</React.Fragment>   
  );
}

export default App;
