import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Projects from '../src/Projects';
import Footer from '../src/Footer';
import New from '../src/New';
import Slide from '../src/SlideBanner';
import Attempt from './Attempt';
function App() {

  
  return (
<React.Fragment>
<New />
<Slide />
  <Header />
  <AboutMe />
  {/* <Projects /> */}
  <Attempt />
  <Footer />
</React.Fragment>    
  );
}

export default App;
