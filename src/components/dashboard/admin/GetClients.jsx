import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAllClient, deleteClient } from '../../../api/clientApi';
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Collapse,
  IconButton,
  CircularProgress,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Edit as EditIcon,
  ExpandLess,
  ExpandMore,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import 'dayjs/locale/sv';
import UpdateClient from './PutClient';
import '../../../index.css';

const fetchClients = async () => {
  const data = await getAllClient();
  return data;
};

const ClientList = () => {
  const queryClient = useQueryClient();
  const {
    data: clients,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });

  const [open, setOpen] = useState({});
  const [editOpen, setEditOpen] = useState({});
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteClientId, setDeleteClientId] = useState(null);
  const [confirmationText, setConfirmationText] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('Lyckades!');

  const deleteMutation = useMutation({
    mutationFn: deleteClient,
    onSuccess: () => {
      queryClient.invalidateQueries(['clients']);
      setSnackbarMessage('Användare är borttagen');
      setSnackbarSeverity('success');
    },

    onError: (error) => {
      setSnackbarMessage('Fel vid borttagning av användare');
      setSnackbarSeverity('Fel');
    },
    onSettled: () => {
      setSnackbarOpen(true);
      setDeleteDialogOpen(false);
      setConfirmationText('');
    },
  });

  const handleClick = (id) => {
    setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
  };

  const handleEditClick = (id) => {
    setEditOpen((prevEditOpen) => ({
      ...prevEditOpen,
      [id]: !prevEditOpen[id],
    }));
  };

  const handleUpdate = (updatedClient) => {
    queryClient.setQueryData(['clients'], (oldData) => {
      if (!oldData) {
        return [updatedClient];
      }
      return oldData.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      );
    });
  };

  const handleOpenDeleteDialog = (id) => {
    setDeleteClientId(id);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setConfirmationText('');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleDeleteClient = () => {
    deleteMutation.mutate(deleteClientId);
  };

  if (isLoading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            className="text-black text-2xl mb-2 font-sans text-center max-w-[500px] mx-auto"
            component="div"
            id="nested-list-subheader"
          >
            Användare info
          </ListSubheader>
        }
      >
        {clients.map((client) => (
          <div key={client.id}>
            <ListItem
              onClick={() => handleClick(client.id)}
              className="max-w-[500px] mx-auto mb-2 cursor-pointer rounded-[5px] bg-black hover:bg-gray-700">
              <ListItemText
                className="text-white text-center font-sans"
                primary={`${client.address}`}
              />
              {open[client.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open[client.id]} timeout="auto" unmountOnExit>
              <Box className="max-w-[500px] mx-auto bg-[#f5f5f5] rounded-md pb-4">
                <List className="py-0 px-3">
                  <ListItem>
                    <ListItemText className="text-uppercase" primary={client.brf ? `BRF: ${client.brf}` : `FÖRETAG: ${client.company}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Org: ${client.org}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Kontakt: ${client.client}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Telefon: ${client.phone}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`E-post: ${client.email}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Post: ${client.areacode}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={`Skapad: ${new Date(
                        client.createdAt
                      ).toLocaleDateString('sv-SE')}`}
                    />
                  </ListItem>
                  {client.updatedAt && (
                    <ListItem>
                      <ListItemText
                        primary={`Uppdaterad: ${new Date(
                          client.updatedAt
                        ).toLocaleDateString('sv-SE')}`}
                      />
                    </ListItem>
                  )}
                  <ListItem>
                    <ListItemText
                      primary={`Giltig: ${client.fromDate} - ${client.toDate}`}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'end',
                      alignItems: 'end',
                    }}
                  >
                    <IconButton onClick={() => handleEditClick(client.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleOpenDeleteDialog(client.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                  {editOpen[client.id] && (
                    <ListItem sx={{ marginBottom: '2rem' }}>
                      <UpdateClient client={client} onUpdate={handleUpdate} />
                    </ListItem>
                  )}
                </List>
              </Box>
            </Collapse>
          </div>
        ))}
      </List>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Bekräfta borttagning</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Skriv "DELETE" för att bekräfta borttagning av användare.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Bekräfta"
            type="text"
            fullWidth
            value={confirmationText}
            onChange={(e) => setConfirmationText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button
            onClick={handleDeleteClient}
            color="primary"
            disabled={confirmationText !== 'DELETE'}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

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
    </>
  );
};

export default ClientList;
