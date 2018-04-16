import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
  render() {
    return(
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <div className="salaries-container">
          <div className="salaries-info">
            <h2>Turing Salaries</h2>
          <a href="https://github.com/jasonhughes1/Turing-Salaries" className="salaries">
          <div className="github-image"></div>
          </a>
            <a href="https://turingsalaries.herokuapp.com/" className="salaries">Live app hosted on Heroku
          </a>
          <p>This was my final project at Turing.</p><p><span className='built-with'>Built with:</span> React, Redux, React Router, Express, Knex, Postgres, and High Charts for data visualization</p>
          <div className="salaries-image"></div>
        </div>
      </div>
        <div className="swapi-container">
          <div className="swapi-info">
          <h2>Swapi-Box</h2>
            <a href="https://github.com/jasonhughes1/SwapiBox"
            className="swapi">
              <div className="github-image"></div>
            </a>
            <p>Swapi Box was a solo project in the 3rd module of Turing. I used the Star Wars API to get the data I needed. The crawl portion of the header was an especially fun CSS challenge. Built with : React, and React-Router</p>
            <div className="swapi-image"></div>
          </div>
        </div>
        <div className="headcount-container">
          <div className="headcount-info">
          <h2>Headcount</h2>
          <a href="https://github.com/jasonhughes1/HeadCount"
          className="headcount">
            <div className="github-image"></div>
          </a>
          <p>Headcount was built by importing files containing various educational stats from districts within Colorado by year, per district. Built with: React</p>
          <div className="headcount-image"></div>
        </div>
        </div>
        <div className="movie-container">
          <div className="movie-info">
          <h2>Movie Tracker</h2>
          <a href="https://github.com/jasonhughes1/Movie-Tracker1"
          className="movie">
            <div className="github-image"></div>
        </a>
        <p>Movie Tracker was built by fetching data from the MoviesDB API. Built with: Redux, React-Router</p>
        <div className="movie-image"></div>
      </div>
        </div>
      </div>
    )
  }
}

export default Projects;
