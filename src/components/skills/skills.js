import React, { Component } from 'react';
import './skills.css';
import HorizontalScroll from 'react-scroll-horizontal'

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h1 className='skills-title'>Skills</h1>
      <div className='image-container'>
        <div className='javascript-image'></div>
        <div className='react-image'></div>
        <div className='redux-image'></div>
        <div className='css-image'></div>
        <div className='node-image'></div>
        <div className='express-image'></div>
        <div className='postgres-image'></div>
        <p className="text">Being a graduate from Turings Front-End program, most of my experience lies in HTML, CSS, JavaScript, jQuery, React, and Redux. I do also enjoy working with Node.js, Express, Postgres, and Knex.</p>
      </div>
    </div>
    )
  }
}


export default Skills;
