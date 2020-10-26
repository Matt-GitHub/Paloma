import React from 'react';

import ClientForm from './ClientForm';
const ClientInfo = ({ viewClient, setViewClients }) => {
  return (
    <div className="client-form-container" id="edit-client">
      <ClientForm viewClient={viewClient} setViewClients={setViewClients} />
    </div>
  );
};

export default ClientInfo;
