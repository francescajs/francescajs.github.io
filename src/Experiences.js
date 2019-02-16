import React, { Component } from 'react';
import codebase from './assets/codebaselogo.png';
import tapin from './assets/tapin2.webp';
import gwc from './assets/GWC-logo.jpg';
import auth from './assets/authentic.png';
import ExperiencesBox from './ExperiencesBox.js';
import './Experiences.css';

class Experiences extends Component {
    render() {
        return (
            <div className="view" id="experiences">
                <div className="pheader">
                    <h1>Experiences</h1>
                </div>
                <div className="box">
                    <div className="boxone">
                        <ExperiencesBox logo={codebase} description="As a mentored developer in CodeBase, worked on a judging portal for CalHacks in a team of 6! Learned front-end web development as well as backend database management."/>
                        <ExperiencesBox logo={tapin} description="Interned for Tapin2, a startup that provides a mobile ordering platform for concessions, merchandise at various venues. Contributed to QA and wireframing for a satellite project."/>
                    </div>
                    <div className="boxtwo">
                        <ExperiencesBox logo={gwc} description="After participating in GWC’s Summer Immersion Program, went back as a Teaching Assistant for the program during Summer 2018 at the Walt Disney Company!"/>
                        <ExperiencesBox logo={auth} description="Interned for Authentic, conducting market research on existing podcast series and launched a pilot podcast “Disrupted”. Took part in the recording and post-production editing, while also participating in recording episodes for an existing program."/>
                    </div>
                </div>
            </div>
        );
    }
}


export default Experiences;
