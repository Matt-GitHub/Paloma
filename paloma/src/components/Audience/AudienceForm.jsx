import React from 'react';
import { useMutation, queryCache } from 'react-query';
import Axios from 'axios';
const AudienceForm = ({ setAddClients }) => {
  const [createAudience, createAudienceInfo] = useMutation(
    values =>
      Axios.post(`http://localhost:8500/api/audience`, values, {
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
    first_name: '',
    last_name: '',
    email: '',
    location: ''
  });

  const handleSubmit = (e, values) => {
    e.preventDefault();
    createAudience(values);
    setAudience({
      first_name: '',
      last_name: '',
      email: '',
      location: ''
    });
  };

  const handleChanges = e => {
    e.preventDefault();
    setAudience({ ...audience, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 onClick={() => setAddClients(false)} className="back-button">
        ← Back
      </h2>
      <form
        onSubmit={e => handleSubmit(e, audience)}
        className="form-container"
      >
        <input
          className="form-input"
          type="text"
          name="first_name"
          value={audience.first_name}
          onChange={handleChanges}
          placeholder={'First Name'}
        />
        <input
          className="form-input"
          type="text"
          name="last_name"
          value={audience.last_name}
          onChange={handleChanges}
          placeholder={'Last Name'}
        />
        <input
          className="form-input"
          type="text"
          name="email"
          value={audience.email}
          onChange={handleChanges}
          placeholder={'Email'}
        />
        <input
          className="form-input"
          type="text"
          name="location"
          value={audience.location}
          onChange={handleChanges}
          placeholder={'Location'}
        />
        <div>
          <button type="submit" className="form-button" id="submit">
            Add Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default AudienceForm;
