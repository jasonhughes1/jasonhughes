import React, { Component } from 'react';
import './contact.css';
import phone from '../../assets/phone.png';
import email from '../../assets/email.svg';
import location from '../../assets/location.jpg';


class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
        <div className="contact-container">
          <h1 className="contact-me">Contact me</h1>
        <h2 className="contact-title">Email:</h2>
        <img className="email" src={email} />
        <h3 className="contact-info">jasonhughes088@gmail.com</h3>
        <h2 className="contact-title">Phone:</h2>
        <img className="phone" src={phone} />
        <h3 className="contact-info">845-661-6670</h3>
        <h2 className="contact-title">Location:</h2>
        <img className="location" src={location} />
        <h3 className="contact-info">Denver, Colorado</h3>
      </div>
      </div>
    )
  }
}

export default Contact;
