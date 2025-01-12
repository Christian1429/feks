import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postClient } from '../../api/client';
import {
  TextField,
  Button,
  IconButton,
  ListItem,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Collapse,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DatePickerClient from './DatePicker';
import 'dayjs/locale/sv';
import { v4 as uuidv4 } from 'uuid';

const CreateClient = () => {
  const [client, setClient] = useState({
    id: uuidv4(),
    phone: '',
    client: '',
    email: '',
    password: '',
    brf: '',
    org: '',
    areacode: '',
    address: '',
    company: '',
    fromDate: null,
    toDate: null,
  });

  const [createOpen, setCreateOpen] = useState(false);
  const [choice, setChoice] = useState('brf');
 
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postClient,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['clients']);
      setCreateOpen(false);
    },
    onError: (error) => {
      console.error('Error creating client:', error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({ ...prevClient, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(client);
  };

  const handleChoiceChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" component="span" marginLeft="1rem">
          Lägg till ny kund
        </Typography>
        <IconButton
          onClick={() => setCreateOpen((prev) => !prev)}
          sx={{ marginLeft: 'auto' }}
        >
          {createOpen ? <CloseIcon /> : <AddIcon />}
        </IconButton>
      </Box>
      <Collapse in={createOpen}>
        <Box>
          <ListItem sx={{ marginBottom: '2rem' }}>
            <form onSubmit={handleSubmit}>
              <DatePickerClient
                fromDate={client.fromDate}
                toDate={client.toDate}
                setClient={setClient}
              />
              <TextField
                label="Telefon"
                name="phone"
                value={client.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Kontakt person"
                name="client"
                value={client.client}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Epost"
                name="email"
                value={client.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Lösenord"
                name="password"
                value={client.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel
                  id="choice-label"
                  sx={{
                    backgroundColor: 'rgb(245,245,245)',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                  }}
                >
                  Välj
                </InputLabel>
                <Select
                  labelId="choice-label"
                  value={choice}
                  onChange={handleChoiceChange}
                >
                  <MenuItem value="brf">BRF</MenuItem>
                  <MenuItem value="company">Företag</MenuItem>
                </Select>
              </FormControl>
              {choice === 'brf' ? (
                <TextField
                  label="BRF namn"
                  name="brf"
                  value={client.brf}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              ) : (
                <TextField
                  label="Företag namn"
                  name="company"
                  value={client.company}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              )}
              <TextField
                label="Organsationsnummer"
                name="org"
                value={client.org}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Post adress"
                name="areacode"
                value={client.areacode}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Adress"
                name="address"
                value={client.address}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Skapa ny kund
              </Button>
            </form>
          </ListItem>
        </Box>
      </Collapse>
    </>
  );
};

export default CreateClient;
