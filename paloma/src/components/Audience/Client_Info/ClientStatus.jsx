import React from 'react';

const ClientStatus = () => {
  const data = [
    { title: 'Status', info: 'Active' },
    { title: 'Source', info: 'Organic' },
    { title: 'Completed Profile', info: 'No' },
    { title: 'Subscribed', info: '7/15/19 02:41PM' },
    { title: 'Last Received', info: '7/17/19 03:59PM' },
    { title: 'Last Sent', info: '7/17/19 03:59PM' }
  ];
  return (
    <div className="client-status-container">
      {data.map(info => {
        return (
          <div key={info.title} className="client-status">
            <p className="client-status-title">{info.title}</p>
            <span className="client-status-info">{info.info}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ClientStatus;
