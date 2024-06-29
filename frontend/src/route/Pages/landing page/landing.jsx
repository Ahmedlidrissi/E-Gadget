import React from 'react';
import './landing.css';
import iphoneImage from '../Assets/landing.jpg'; 

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>E-Gadget</h1>
        <p>High Quality iPhones With The Most Reasonable Prices.</p>
        <a href="/" className="btn-primary">See Products</a>
      </div>
      <div className="landing-image">
        <img src={iphoneImage} alt="iPhone" />
      </div>
    </div>
  );
};

export default Landing;
