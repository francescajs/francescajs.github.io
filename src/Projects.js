import React, { Component } from 'react';
import bs from './assets/binarysearch.png';
import mtg from './assets/mindthegap.png';
import filler from './assets/filler.png';
import ProjectsBox from './ProjectsBox.js';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="view">
                <div className="pheader">
                    <h1>Projects</h1>
                    <hr width="25%"/>
                </div>
                <div className="box">
                    <ProjectsBox scsht={mtg} description="MIND THE GAP: A web-based game with javascript and other web dev components that aims to inform users of the gender wage gap!" />
                    <ProjectsBox scsht={bs} description="An educational demo of Binary Search! Made with p5, an incredibly accessible javascript library!"/>
                    <ProjectsBox scsht={filler} description="More to come!"/>
                </div>
            </div>
        );
    }
}


export default Projects;
