import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Footer from '../src/Footer';
import New from '../src/New';
import Attempt from './Attempt';

function App() {

  
  return (
<React.Fragment>
<New />
  <Header />
  <AboutMe />
  <Attempt />
  <Footer />
</React.Fragment>    
  );
}

export default App;
