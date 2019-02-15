import React, { Component } from 'react';
import './Projects.css';

class ProjectsBox extends Component {
    render() {
        return (
            <div className="projbox">
                <img src={this.props.scsht} alt="screenshot"/>
                <p>{this.props.description}</p>
            </div>    
        );
    }
}

export default ProjectsBox;
