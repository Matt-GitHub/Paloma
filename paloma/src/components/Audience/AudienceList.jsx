import React from 'react';
import useAudienceData from './AudienceData';

const AudienceList = ({ setAddClients, setViewClients }) => {
  const clientData = useAudienceData();
  return (
    <div>
      <div className="lists-container">
        {clientData.isLoading
          ? 'Loading Client Data'
          : clientData.isError
          ? 'Error loading'
          : clientData.data.audience.map(data => {
              return (
                <div className="list-box">
                  <div className="list-container">
                    <p className="list-item">
                      <span className="list-item-desc">First Name:</span>{' '}
                      {data.first_name}
                    </p>
                    <p className="list-item">
                      <span className="list-item-desc">Last Name:</span>{' '}
                      {data.last_name}
                    </p>
                    <p className="list-item">
                      <span className="list-item-desc">Location: </span>
                      {data.location}
                    </p>
                    <p className="list-item">
                      <span className="list-item-desc">Status: </span>
                      Active
                    </p>
                  </div>
                  <button
                    className="form-button"
                    id="view-btn"
                    onClick={() => setViewClients(data)}
                  >
                    View
                  </button>
                </div>
              );
            })}
      </div>
      <button
        className="form-button"
        id="edit-button"
        onClick={() => setAddClients(true)}
      >
        Add Client
      </button>
    </div>
  );
};

export default AudienceList;
