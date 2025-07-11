import { useState, useEffect } from 'react';
import { getStock } from '../../api/client';
import { Box, Typography, CircularProgress } from '@mui/material';
import '../../index.css';

const mainColor = '#BA2C2C';

const ClientStock = () => {
  const [stock, setStock] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const data = await getStock();
        setStock(data);
      } catch (error) {
        console.error('Error fetching stock:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStock();
  }, []);

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Typography color="error">Fel vid hämtning av inventarier.</Typography>
    );

  return (
    <Box
      p={4}
      className="modal-box"
      sx={{ backgroundColor: mainColor, color: 'white' }}
    ></Box>
  );
};

export default ClientStock;
