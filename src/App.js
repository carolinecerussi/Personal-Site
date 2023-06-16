import './App.css';
import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Projects from '../src/Projects';
import Footer from '../src/Footer';
function App() {

  
  return (
<React.Fragment>
  <Header />
  <AboutMe />
  <Projects />
  <Footer />
</React.Fragment>    
  );
}

export default App;
