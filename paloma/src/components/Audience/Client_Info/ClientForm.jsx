import React from 'react';
import { useMutation, queryCache } from 'react-query';
import Axios from 'axios';
import useAudienceData from '../AudienceData';

const ClientForm = ({ viewClient, setViewClients }) => {
  const [createAudience, createAudienceInfo] = useMutation(
    values =>
      Axios.put(`http://localhost:8500/api/audience/${viewClient.id}`, values, {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN')
        }
      }),
    {
      onSuccess: () => {
        queryCache.invalidateQueries('audience data');
      }
    }
  );

  const [audience, setAudience] = React.useState({
    first_name: viewClient.first_name,
    last_name: viewClient.last_name,
    email: viewClient.email,
    location: viewClient.location
  });

  const handleSubmit = (e, values) => {
    e.preventDefault();
    createAudience(values);
  };

  const handleChanges = e => {
    e.preventDefault();
    setAudience({ ...audience, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, audience)}>
        <div className="form-split">
          <p>Fields</p>
          <button
            type="submit"
            className="client-option-btn"
            id="edit-client-btn"
          >
            Edit
          </button>
        </div>
        <div>
          <input
            className="tag-form-input"
            type="text"
            placeholder="first name"
            name="first_name"
            value={audience.first_name}
            onChange={handleChanges}
          />
          <input
            className="tag-form-input"
            type="text"
            placeholder="last name"
            name="last_name"
            value={audience.last_name}
            onChange={handleChanges}
          />
          <input
            className="tag-form-input"
            type="text"
            placeholder="Email goes here"
            name="email"
            value={audience.email}
            onChange={handleChanges}
          />
          <input
            className="tag-form-input"
            type="text"
            placeholder="Location"
            name="location"
            value={audience.location}
            onChange={handleChanges}
          />
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
