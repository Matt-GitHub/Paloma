import React from 'react';
import Landing from './pages/landing';
import Application from './pages/Application';
import PrivateRouter from './utils/privateRoutes';
import { Route } from 'react-router-dom';
import { ReactQueryDevTools } from 'react-query-devtools';
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
