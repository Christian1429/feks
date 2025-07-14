import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putClient } from '../../../api/clientApi';
import { TextField, Button, Snackbar, Alert, Box } from '@mui/material';

const UpdateClient = ({ client, onUpdate, onCloseEdit }) => {
  const [editClient, setEditClient] = useState(client || {});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    setEditClient(client || {});
  }, [client]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: putClient,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['clients']);
      onUpdate(data);
      setSnackbarMessage('Client updated successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      if (onCloseEdit) {
        onCloseEdit();
      }
    },
    onError: (error) => {
      console.error('Error updating client:', error);
      setSnackbarMessage(`Error updating client: ${error.message}`);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditClient((prevClient) => ({ ...prevClient, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(editClient);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          margin: '0 auto',
          width: '100%',
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Telefon"
            name="phone"
            value={editClient.phone || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Kund"
            name="client"
            value={editClient.client || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Epost"
            name="email"
            value={editClient.email || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="BRF"
            name="brf"
            value={editClient.brf || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Post adress"
            name="areacode"
            value={editClient.areacode || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Adress"
            name="address"
            value={editClient.address || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Företag"
            name="company"
            value={editClient.company || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Org nummer"
            name="org"
            value={editClient.org || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Uppdatera kund
          </Button>
        </form>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default UpdateClient;
