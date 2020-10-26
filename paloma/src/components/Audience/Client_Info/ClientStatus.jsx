import React from 'react';

const ClientStatus = () => {
  const data = [
    { title: 'status', info: 'Active' },
    { title: 'Source', info: 'Organic' },
    { title: 'Completed_Profile', info: 'No' },
    { title: 'Subscribed', info: '7/15/19 02:41PM' },
    { title: 'Last_Received', info: '7/17/19 03:59PM' },
    { title: 'Last_Sent', info: '7/17/19 03:59PM' }
  ];
  return (
    <div className="client-status-container">
      {data.map(info => {
        return (
          <div className="client-status">
            <p className="client-status-title">{info.title}</p>
            <span className="client-status-info">{info.info}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ClientStatus;
