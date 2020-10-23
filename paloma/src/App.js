import React from 'react';
import Navigation from './components/Navigation';
import Audience from './components/Audience/Audience';
import Landing from './pages/landing';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* <Navigation />
      <Audience /> */}
      <Landing />
    </div>
  );
}

export default App;
