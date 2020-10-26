import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import components
import Dashboard from './NavComponents/Dashbaord';
import Acquisition from './NavComponents/Acquisition';
import Campaigns from './NavComponents/Campaigns';
import Global from './NavComponents/Global';
import Configuration from './NavComponents/Configuration';
import Audience from './Audience/Audience';
const CourseRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/app/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/app/Acquisition">
          <Acquisition />
        </Route>
        <Route exact path="/app/Campaigns">
          <Campaigns />
        </Route>
        <Route exact path="/app/Global">
          <Global />
        </Route>
        <Route exact path="/app/Audience">
          <Audience />
        </Route>
        <Route exact path="/app/Configuration">
          <Configuration />
        </Route>
        <Redirect path="/*" to="/" />
      </Switch>
    </div>
  );
};

export default CourseRoutes;
