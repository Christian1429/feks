import { useState, useEffect } from 'react';
import { getAllClient } from '../../api/client';
import CreateClient from './PostClient';
import ClientList from './GetClients';
import UpdateClient from './PutClient';

const ParentComponent = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [createOpen, setCreateOpen] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const data = await getAllClient();
      setClients(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleCreate = async (newClient) => {
    try {
      setClients((prevClients) => [...prevClients, newClient]);
      setCreateOpen(false);
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setCreateOpen(true)}>Create New Client</button>
      {createOpen && <CreateClient onCreate={handleCreate} />}
      <ClientList clients={clients} loading={loading} error={error} />
    </div>
  );
};

import React, { useState } from 'react';
import UpdateClient from './PutClient';

const PutParentComponent = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleEditClick = (client) => {
    setSelectedClient(client);
    setEditOpen(true);
  };

  const handleUpdate = (updatedClient) => {
    console.log('Client updated:', updatedClient);
    setEditOpen(false);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  return (
    <div>
      {editOpen && (
        <UpdateClient
          client={selectedClient}
          onUpdate={handleUpdate}
          onCloseEdit={handleCloseEdit}
        />
      )}
    </div>
  );
};
export { ParentComponent, PutParentComponent };
