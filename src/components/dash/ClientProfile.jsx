import React, { useState, useEffect } from 'react';
import { getProfile } from '../../api/client';
import { Box, Typography, CircularProgress, Paper } from '@mui/material';
import './muiForm.css';

const mainColor = '#BA2C2C';
const secondaryColor = '#DB7A86';

const ClientProfile = () => {
  const [client, setClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await getProfile();
        setClient(data);
      } catch (error) {
        console.error('Error fetching client:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClient();
  }, []);

  if (isLoading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Fel vid hämtning av profil.</Typography>;

  return (
    <Box
      p={4}
      className=""
      sx={{  color: 'white' }}
    >
      <Typography variant="h6" gutterBottom>
        <strong>{client.company ? 'Företag' : 'BRF'}:</strong>{' '}
        {client.brf && <span>{client.brf}</span>}{' '}
        {client.company && <span>{client.company}</span>}
      </Typography>
      {client && (
        <>
          <Typography>
            <strong>Org:</strong> <span className="spantag"> {client.org}</span>
          </Typography>
          <Typography>
            <strong>Email:</strong> <span className="spantag">{client.email}</span>
          </Typography>
          <Typography>
            <strong>Adress:</strong>{' '}
            <span className="spantag"> {client.address}</span>
          </Typography>
          <Typography>
            <strong>Post adress:</strong>{' '}
            <span className="spantag">{client.areacode}</span>
          </Typography>
          <Typography>
            <strong>Kontakt person:</strong>{' '}
            <span className="spantag"> {client.client}</span>
          </Typography>
          <Typography>
            <strong>Medlemskap:</strong>{' '}
            <span className="spantag">
              {client.fromDate} - {client.toDate}
            </span>
          </Typography>
          <Typography>
            <strong>Telefon nummer:</strong>
            <span className="spantag"> {client.phone}</span>
          </Typography>
        </>
      )}
    </Box>
  );
};

export default ClientProfile;