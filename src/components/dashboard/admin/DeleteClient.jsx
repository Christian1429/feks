import { deleteClient } from '../../../api/clientApi';

export const handleDeleteClient = async (
  id,
  setClients,
  setSnackbarMessage,
  setSnackbarSeverity,
  setSnackbarOpen,
  setDeleteDialogOpen,
  setConfirmationText
) => {
  try {
    await deleteClient(id, setClients);
    setSnackbarMessage('Klient är borttagen');
    setSnackbarSeverity('Lyckades');
  } catch (error) {
    console.error('Error deleting client:', error);
    setSnackbarMessage('Fel vid borttagning av klient');
    setSnackbarSeverity('error');
  } finally {
    setSnackbarOpen(true);
    setDeleteDialogOpen(false);
    setConfirmationText('');
  }
};
