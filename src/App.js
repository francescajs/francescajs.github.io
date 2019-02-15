import React, { Component } from 'react';
import './App.css';
import AboutMe from './AboutMe.js';
import Home from './Home.js';
import Experiences from './Experiences.js';
import Projects from './Projects.js';



class App extends Component {
  render() {
    return (
      <div>
      <Home/>
      <div className="bar"/>
      <AboutMe/>
      <Experiences/>
      <Projects/>
      </div>
    );
  }
}

export default App;
