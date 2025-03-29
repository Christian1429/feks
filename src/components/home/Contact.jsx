import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from '@formspree/react';
import '../../components/dash/muiForm.css';

const Contact = ({ hideContactForm }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [state, handleSubmit] = useForm('xwkgylwa');
  const [choice, setChoice] = useState('brf');

      const handleChoiceChange = (e) => {
        setChoice(e.target.value);
      };

  if (state.succeeded) {
    return (
      <Modal
        open={true}
        onClose={hideContactForm}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: isMobile ? '100%' : '650px',
            maxHeight: isMobile ? '100%' : '800px',
            padding: isMobile ? '10px' : '20px',
            boxShadow: 24,
            bgcolor: 'background.paper',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <IconButton
            onClick={hideContactForm}
            sx={{
              position: 'absolute',
              top: isMobile ? '0%' : '10px',
              right: isMobile ? '0%' : '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <CloseIcon sx={{ color: black }} />
          </IconButton>
          <Typography
            id="contact-modal-title"
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', marginBottom: '20px' }}
          >
            Tack!
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            Meddelandet har skickats. Vi återkommer så snart som möjligt.
          </Typography>
        </Box>
      </Modal>
    );
  }
  return (
    <Modal
      open={true}
      onClose={hideContactForm}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box
        sx={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '100%' : '640px',
          height: isMobile ? '100%' : '820px',
          padding: isMobile ? '8px' : '20px',
          borderRadius: '8px',
          boxShadow: 24,
          backgroundColor: 'white',
          backgroundImage: `linear-gradient(rgba(228, 228, 228, 0.7), rgba(255, 255, 255, 0.7))`,
          borderWidth: '4px',
        }}
      >
        <IconButton
          onClick={hideContactForm}
          sx={{
            position: 'absolute',
            top: isMobile ? '5px' : '10px',
            right: isMobile ? '5px' : '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <CloseIcon sx={{ color: 'black' }} />
        </IconButton>
        <Typography
          id="contact-modal-title"
          component="h2"
          sx={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '12px',
            textTransform: 'none',
          }}
        >
          Första steget mot att krissäkra!
        </Typography>
        <Typography
          id="contact-modal-title"
          component="h2"
          sx={{
            textAlign: 'center',
            marginBottom: '4px',
            textTransform: 'none',
          }}
        >
          Fyll i dina uppgifter så kontaktar vi dig för en kostnadsfri
          konsultation eller nå oss via email: info@krissakra.se
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel
              sx={{
                backgroundColor: 'rgb(255, 255, 255)',
                paddingLeft: '5px',
                paddingRight: '5px',
                color: 'black',
              }}
              id="choice-label"
            >
              Vad representerar du?
            </InputLabel>
            <Select
              labelId="choice-label"
              value={choice}
              onChange={handleChoiceChange}
              required
            >
              <MenuItem value="brf">BRF</MenuItem>
              <MenuItem value="company">FÖRETAG</MenuItem>
              <MenuItem value="samfallighet">SAMFÄLLIGHET</MenuItem>
              <MenuItem value="privat">PRIVAT</MenuItem>
              <MenuItem value="question">ÖVRIGA FRÅGOR</MenuItem>
            </Select>
          </FormControl>
          {choice === 'brf' && (
            <TextField
              label="Organisations nummer"
              name="brf"
              type="text"
              fullWidth
              margin="normal"
            />
          )}
          {(choice === 'privat' || choice === 'question') && (
            <Tooltip title="Organisationsnummer är endast nödvändigt om du representerar en BRF, samfällighet eller företag.">
              <span>
                <TextField
                  disabled
                  label="Organisations nummer"
                  name="brf"
                  type="text"
                  fullWidth
                  margin="normal"
                />
              </span>
            </Tooltip>
          )}
          {choice === 'company' && (
            <TextField
              label="Organisations nummer"
              name="company"
              type="text"
              fullWidth
              margin="normal"
            />
          )}
          {choice === 'samfallighet' && (
            <TextField
              label="Organisations nummer"
              name="samfallighet"
              type="text"
              fullWidth
              margin="normal"
            />
          )}
          <TextField
            label="Ditt namn"
            name="namn"
            type="text"
            required
            fullWidth
            sx={{ marginBottom: isMobile ? '8px' : '20px' }}
          />
          <TextField
            label="Epost"
            name="email"
            type="email"
            required
            fullWidth
            sx={{ marginBottom: isMobile ? '8px' : '20px' }}
          />
          <TextField
            label="Adress"
            name="adress"
            type="adress"
            fullWidth
            sx={{
              marginBottom: isMobile ? '8px' : '20px',
            }}
          />
          <TextField
            label="Telefon nummer"
            name="phone"
            type="phone"
            fullWidth
            sx={{ marginBottom: isMobile ? '8px' : '20px' }}
          />
          <TextField
            label="Övriga frågor"
            name="message"
            type="text"
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: isMobile ? '8px' : '20px' }}
          />
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={state.submitting}
              sx={{
                height: '45px',
                backgroundColor: 'hsl(0, 62%, 45%)',
                transition: 'var(--transition)',
                '&:hover': {
                  backgroundColor: 'hsl(0, 80%, 74%)',
                },
              }}
            >
              Skicka
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default Contact;
