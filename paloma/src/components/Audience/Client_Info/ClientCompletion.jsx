import React from 'react';

const ClientCompletion = () => {
  const data = [
    { title: 'Total Completed', info: '2' },
    { title: 'Total Responses', info: '30' },
    { title: 'Total Clicks', info: '0' },
    { title: 'Completion Rate', info: '66.7%' },
    { title: 'Response Rate', info: '66.7%' },
    { title: 'Click Through Rate', info: '0' }
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

export default ClientCompletion;
