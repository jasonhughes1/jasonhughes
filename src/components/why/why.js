import React, { Component } from 'react';
import './why.css';
import wowza from '../../assets/wowzalogo.png';
import apex from '../../assets/apex-logo.png';

class Why extends Component {
  render() {
    return(
      <div className="why-container">
        <img className="company-logo" src={wowza} />
        <h2 className="why-title">Why do I want to work at Wowza?</h2>
        <div className="des-container">
          <div className="des-1">
            <img src={apex} className="award-image"/>
             <p> Wowza has been nominated as Company of the Year at this year’s APEX Awards. The awards recognize Colorado’s technology excellence, highlighting remarkable leaders and innovators. The 16th Annual APEX awards ceremony will be held November 9, 2016, in Denver. </p></div>
          <div className="des-2">
            <h3 className="des-2-title">Interesting and successful: </h3> <p>Wowza® Media Systems creates disruptive technologies for delivering video and audio streams to any screen, from computers to televisions to mobile devices. We have been in business since 2005, won numerous industry awards, and are deployed in more than 150 countries. As a result, we are growing rapidly, building out our teams, services, and infrastructure.
            </p>

          </div>
          <div className="des-3">
            <h3 className="des-3-title">From Personal Experience:</h3>I was thoroughly impressed with the presentation given at the Denver Video Meetup Technology Group on Thursday April 19th.</div>
        </div>
      </div>
    )
  }
}

export default Why;
