import React from 'react';
import AudienceList from './AudienceList';
import './Audience.css';
import AudienceForm from './AudienceForm';
import ViewClients from './ViewClients';
const Audience = () => {
  const [addClients, setAddClients] = React.useState(false);
  const [viewClient, setViewClients] = React.useState(null);
  return (
    <div>
      <h2 className="audience-title">Manage Audience</h2>
      {addClients == false && viewClient == null ? (
        <AudienceList
          setAddClients={setAddClients}
          setViewClients={setViewClients}
        />
      ) : addClients == true ? (
        <AudienceForm
          setAddClients={setAddClients}
          setViewClients={setViewClients}
        />
      ) : (
        <ViewClients viewClient={viewClient} setViewClients={setViewClients} />
      )}
    </div>
  );
};

export default Audience;
