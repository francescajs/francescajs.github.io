import React, { Component } from 'react';
import fb from './assets/fb-mark.png';
import gh from './assets/GitHub-Mark.png';
import linked from './assets/linkedin-mark.png';
import resume from './assets/resume-mark.png';
import PDF from './assets/FrancescaSong_Resume_2020.pdf';
import ig from './assets/instagram-icon.png';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="view" id="aboutme">
                <div className="pheader">
                    <h1>About Me</h1>
                </div>
                
                <div className="aboutBody">
                    <h2>Hi there!</h2>
                    <p>
                    My name is Francesca and I am a freshman at UC Berkeley studying Electrical Engineering and Computer Science, with a minor in Music! 
                    With my various interests that range from entertainment and music to cybersecurity, I hope to serve as a bridge between the tech industry and another that may seem entirely unrelated to tech at first!
                    </p>
                    <p>
                    Apart from academics, I am an urban dancer, a coffee aficionado, and a spicy food fan! 
                    </p>
                </div>

                <div className="sns-block">
                    <div id="txt"><p>Let's connect!</p></div>
                    <ul>
                        <a href="https://www.linkedin.com/in/francescajsong/" target="_blank"> 
                            <img src={linked} className="sns-mark" alt="logo"/></a>
                        <a href="https://github.com/francescajs" target="_blank"> 
                            <img src={gh} className="sns-mark" alt="logo"/></a>
                        <a href="https://www.facebook.com/francescajsong" target="_blank"> 
                            <img src={fb} className="sns-mark" alt="logo"/></a>
                        <a href="https://www.instagram.com/franchestnut_/" target="_blank">     
                            <img src={ig} className="sns-mark" alt="logo"/></a>
                        <a href= {PDF} target="_blank">
                            <img src={resume} className="sns-mark" alt="logo"/></a>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AboutMe;
