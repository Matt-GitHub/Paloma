import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    const links = [
      'Dashboard',
      'Acquisition',
      'Campaigns',
      'Global',
      'Audience',
      'Configuration'
    ];
    return (
      <div className="dashboard">
        <h1 className="dashboard-title">Paloma</h1>
        <nav>
          <ul className="dashboard-ul">
            {links.map(link => {
              return (
                <li
                  className="dashboard-li"
                  key={link}
                  id={link === 'Audience' ? 'dashboard-li-active' : null}
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
