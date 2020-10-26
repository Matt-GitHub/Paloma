import React from 'react';
import Navigation from './components/Navigation';
import Audience from './components/Audience/Audience';
import Landing from './pages/landing';
import Application from './pages/Application';
import PrivateRouter from './utils/privateRoutes';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <PrivateRouter path="/app" component={Application} />
    </div>
  );
}

export default App;
