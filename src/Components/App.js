import Header from './Header';
import React from 'react';
import AboutMe from './AboutMe';
import Map from './Map.js';
import 'reactjs-popup/dist/index.css';
import Rainbow from './Rainbow';
import Back from './Background';
import ProjectGrid from "./ProjectGrid.js"
import Footer from './Footer.js';
import DraggableThing from './DraggableThing.js';
import Dropdown from './Dropdown';
import Skills from './Skills.js';
import Carousel from "./Carousel.jsx"
import Swiper from './Swiper.js';
import ImageCarouselApp from './ImageCarouselApp.jsx';
function App() {



  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <Dropdown />
      {/* <NavBar /> */}
      <Back />
      <Header />
      <Rainbow />
      <ProjectGrid />
      <Skills />
      <ImageCarouselApp />
<Rainbow />
      <AboutMe>
        <Map />
      </AboutMe>
     
      {/* <DraggableThing /> */}
{/* <Slide /> */}
<Rainbow />
      <Footer />
    </React.Fragment>
  );
}

export default App;
