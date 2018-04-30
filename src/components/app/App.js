import React, { Component } from 'react';
import './App.css';
import Skills from '../skills/skills.js';
import Buttons from '../buttons/buttons.js';
import Projects from '../projects/projects.js';
import Why from '../why/why.js';
import Whyme from '../whyme/whyme.js';
import headshot from '../../assets/headshot.jpg';
import ScrollUpButton from "react-scroll-up-button";
import Contact from '../contact/contact';
import { Scroll } from 'react-scroll'

class App extends Component {

scroll() {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;

  scroll.scrollTo(650);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="my-name">Jason Hughes</h1>
          <h3 className="my-title">Software Engineer</h3>
        <Buttons />
        </header>
        <div onClick={() => this.scroll()}>
        <section id="section07" className="demo">
          <a href="#section08"><span></span><span></span><span></span></a>
      </section>
    </div>
        {/* <Why /> */}
        {/* <Whyme /> */}
        <Skills />
        <Projects />
        <Contact />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
