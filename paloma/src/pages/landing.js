import React from 'react';
import Auth from '../components/Login/login';
import './landing.css';
const Landing = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">
        See how Paloma can work for your business
      </h1>
      <Auth />
    </div>
  );
};

export default Landing;
