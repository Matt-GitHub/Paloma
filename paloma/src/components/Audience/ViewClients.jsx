import React from 'react';
import ClientStatus from './Client_Info/ClientStatus';
import ClientCompletion from './Client_Info/ClientCompletion';
import Tags from './Client_Info/Tags';
import ClientInfo from './Client_Info/ClientInfo';
import { useMutation, queryCache } from 'react-query';
import Axios from 'axios';
import useAudienceData from './AudienceData';

const ViewClients = ({ viewClient, setViewClients }) => {
  const copyText = async () => {
    let target = await navigator.clipboard.writeText(viewClient.email);
    alert('email copied');
    return target;
  };

  const [removeAudience, removeAudienceInfo] = useMutation(
    values =>
      Axios.delete(`http://localhost:8500/api/audience/${viewClient.id}`),
    {
      onSuccess: () => {
        queryCache.invalidateQueries('audience data');
      }
    }
  );

  const handleDelete = () => {
    removeAudience();
    setViewClients(null);
  };

  const clientData = useAudienceData();
  console.log('check this out', clientData?.data?.audience);
  const clientDetails = clientData?.data?.audience.filter(
    info => info.id == viewClient.id
  );
  console.log('client info waldo', clientDetails);
  return (
    <div>
      <div className="client-options-container">
        <div className="client-options-name">
          <img
            className="client-options-image"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
            alt="picture of user"
          />
          <p className="client-options-fullname">
            {clientDetails[0].first_name} {clientDetails[0].last_name}
          </p>
        </div>
        <div className="client-options-buttons">
          <button
            className="client-option-btn"
            id="copy-btn"
            onClick={() => copyText()}
          >
            Copy Email
          </button>
          <button
            className="client-option-btn"
            id="remove-btn"
            onClick={() => handleDelete()}
          >
            Remove
          </button>
        </div>
      </div>
      <ClientStatus />
      <ClientCompletion />
      <Tags viewClient={viewClient} />
      <ClientInfo viewClient={viewClient} setViewClients={setViewClients} />
      <p className="client-go-back" onClick={() => setViewClients(null)}>
        ← Audience
      </p>
    </div>
  );
};

export default ViewClients;
