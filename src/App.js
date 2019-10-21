import React, { Component } from 'react';
// import scrollToComponent from 'react-scroll-to-component';
//import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';
import AboutMe from './AboutMe.js';
import Experiences from './Experiences.js';
import Projects from './Projects.js';
import fran from './assets/homepfran2.jpg';


class App extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.AboutMe = React.createRef();
    this.Experiences = React.createRef();
    this.Projects = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    //this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.myRef.current);
  }
  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = window.pageYOffset;
    // console.log(scrollTop);
    // console.log(this.myRef);
    if (scrollTop > 122) {
        this.myRef.current.className = "navbar sticky";
    } else {
        this.myRef.current.className = "navbar";
    }
}

  render() {
    return (
      <div>
      <div className="view">
        <header id="header">
          <div id="Name">
              <h1>Francesca Song</h1> 
          </div>
          <div id="adj">
              <p id="item">student.</p>
              <p id="item">creator.</p>
              <p id="item">student.</p>
          </div>
        </header>
        <div ref={this.myRef} className="navbar">
          <a href="#aboutme">About Me</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Projects</a>
        </div>
        <img src={fran} id="profPic" alt="logo"/>
      </div>
      <div className="bar"/>
      <AboutMe/>
      <Experiences/>
      <Projects/>
      </div>
    );
  }
}

export default App;
