import React, { Component } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  const links = [
    'Dashboard',
    'Acquisition',
    'Campaigns',
    'Global',
    'Audience',
    'Configuration'
  ];

  const history = useHistory();
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Paloma</h1>
      <nav>
        <ul className="dashboard-ul">
          <li>
            {links.map(link => {
              return (
                <NavLink
                  to={`/app/${link}`}
                  className="dashboard-li"
                  activeClassName="dashboard-li-active"
                  key={link}
                >
                  {link}
                </NavLink>
              );
            })}
          </li>
        </ul>
      </nav>
      <button
        className="form-button"
        id="log-out"
        onClick={() => {
          localStorage.removeItem('AUTH_TOKEN');
          localStorage.removeItem('USER_ID');
          history.push('/');
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Navigation;
