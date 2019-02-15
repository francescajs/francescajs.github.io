import React, { Component } from 'react';
import './Experiences.css';


class ExperiencesBox extends Component {
    render() {
        return (
            <div className="expbox">
                <img src={this.props.logo} alt="logo"/>
                <p> {this.props.description}</p>
            </div>    
        );
    }
}


export default ExperiencesBox;
