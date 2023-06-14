import './App.css';
import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';
import Projects from '../src/Projects';

function App() {

  
  return (
<React.Fragment>
  <Header />
    <AboutMe />
    <Projects />
    </React.Fragment>    
  );
}

export default App;
