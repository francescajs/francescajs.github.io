import React, { Component } from 'react';
import './Home.css';
import fran from './assets/homepfran2.jpg';

class Home extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
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
        );
    }
}


export default Home;
