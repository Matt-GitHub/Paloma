import React from 'react';

const Audience = () => {
  const [audience, setAudience] = React.useState([
    {
      email: 'test',
      number: '555',
      first_name: 'a',
      last_name: 'b',
      id: Date.now()
    }
  ]);
  const [client, setClient] = React.useState({
    email: '',
    number: '',
    first_name: '',
    last_name: '',
    id: Date.now()
  });

  const [create, setCreate] = React.useState(false);

  const [view, setView] = React.useState(null);
  function handleChanges(e) {
    setClient({ ...client, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAudience([...audience, client]);
    setClient({
      email: '',
      number: '',
      first_name: '',
      last_name: '',
      id: Date.now()
    });
    setCreate(false);
  }

  const [edit, setEditing] = React.useState(false);

  function editClient(data) {
    setEditing(true);
    setClient(data);
  }

  function deleteClient(data) {
    let toRemove = data.id;
    let newAudience = [];
    audience.map(info => {
      if (info.id !== toRemove) {
        newAudience.push(info);
      }
    });
    setAudience(newAudience);
    setView(null);
  }

  React.useEffect(() => {}, [audience]);

  return (
    <div>
      <h2>Manage Audience</h2>
      {create === true ? (
        <button
          onClick={() => {
            setCreate(false);
            setClient({
              email: '',
              number: '',
              first_name: '',
              last_name: '',
              id: Date.now()
            });
          }}
        >
          Cancel
        </button>
      ) : (
        <button onClick={() => setCreate(!create)}>Add Client</button>
      )}
      {create === true ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={client.email}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="number"
            value={client.number}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="first_name"
            value={client.first_name}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="last_name"
            value={client.last_name}
            onChange={handleChanges}
          />
          <button type="submit">Add Client</button>
        </form>
      ) : null}
      {audience.map(data => {
        console.log('data', data);
        return (
          <div>
            <p key={data}>{data.email}</p>
            <button onClick={() => setView(data)}>View Info</button>
          </div>
        );
      })}

      <h3>Client Details</h3>
      {view == null ? (
        'Please select a client for detailed view'
      ) : (
        <div>
          {edit === true ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                value={client.email}
                onChange={handleChanges}
              />
              <input
                type="text"
                name="number"
                value={client.number}
                onChange={handleChanges}
              />
              <input
                type="text"
                name="first_name"
                value={client.first_name}
                onChange={handleChanges}
              />
              <input
                type="text"
                name="last_name"
                value={client.last_name}
                onChange={handleChanges}
              />
              <button type="submit">Edit Client</button>
            </form>
          ) : (
            <p>{view.number}</p>
          )}
          <button onClick={() => editClient(view)}>Edit Client</button>
          <button onClick={() => deleteClient(view)}>Delete Client</button>
        </div>
      )}
    </div>
  );
};

export default Audience;
