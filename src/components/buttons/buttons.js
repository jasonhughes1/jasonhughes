import React, { Component } from 'react';
import './buttons.css';
import Resume from '../../assets/Resume.pdf'

class Buttons extends Component {
  render() {
    return (
      <div className="button-container">
        <a href="https://github.com/jasonhughes1" className="button">
        <div className="github-button">
        <div className="github-image">
        </div>
      <h3>Github</h3>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/jason-hughes-75b39b27/" className="button">
      <div className="linkedin-button">
        <div className="linkedin-image">
        </div>
        <h3>LinkedIn</h3>
    </div>
  </a>
  <a href={Resume} target="_blank" className="button">
        <div className="resume-button">
        <div className="pdf-image">
        </div>
        <h3>Resume</h3>
        </div>
      </a>
      </div>
    )
  }
}


export default Buttons;
