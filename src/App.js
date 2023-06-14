import './App.css';
import Header from '../src/Header';
import React from 'react';
import AboutMe from '../src/AboutMe';

function App() {
  return (
<React.Fragment>
  <Header />
    <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
    <AboutMe />
    </React.Fragment>    
  );
}

export default App;
