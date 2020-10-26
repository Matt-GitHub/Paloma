import React from 'react';
import Navigation from '../components/Navigation';
import Audience from '../components/Audience/Audience';
import NavRoutes from '../components/NavigationRoutes';
import '../App.css';

const Dashboard = () => {
  return (
    <div className="app-container">
      <Navigation />
      <NavRoutes />
      {/* <Audience /> */}
    </div>
  );
};

export default Dashboard;
