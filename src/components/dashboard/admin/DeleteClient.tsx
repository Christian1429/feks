import { Dispatch, SetStateAction } from 'react';
import { deleteClient } from '../../../api/clientApi';
import { Client } from '../../../types/Client';

export const handleDeleteClient = async (
  id: string,
  setClients: Dispatch<SetStateAction<Client[]>>,
  setSnackbarMessage: Dispatch<SetStateAction<string>>,
  setSnackbarSeverity: Dispatch<
    SetStateAction<'success' | 'error' | 'info' | 'warning'>
  >,
  setSnackbarOpen: Dispatch<SetStateAction<boolean>>,
  setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>,
  setConfirmationText: Dispatch<SetStateAction<string>>
): Promise<void> => {
  try {
    await deleteClient(id);
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== id)
    );
    setSnackbarMessage('Klient är borttagen');
    setSnackbarSeverity('success');
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
