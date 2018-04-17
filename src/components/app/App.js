import React, { Component } from 'react';
import './App.css';
import Skills from '../skills/skills.js';
import Buttons from '../buttons/buttons.js';
import Projects from '../projects/projects.js';
import headshot from '../../assets/headshot.jpg';
import ScrollUpButton from "react-scroll-up-button";
import Contact from '../contact/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="my-name">Jason Hughes</h1>
          <h3 className="my-title">Software Engineer</h3>
        <Buttons />
        </header>
        <Skills />
        <Projects />
        <Contact />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
