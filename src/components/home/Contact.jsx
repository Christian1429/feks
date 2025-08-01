import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Tooltip,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useForm } from '@formspree/react';
import '../../index.css';
import Title from './Title';

const Contact = () => {
  const email = import.meta.env.VITE_EMAIL_KEY;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [state, handleSubmit] = useForm(email);
  const [consent, setConsent] = useState(false);

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  if (state.succeeded) {
    return (
      <Box
        id="contact-form"
        sx={{
          padding: '40px 20px',
          textAlign: 'center',
          background: '#f8f1f1',
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Tack!
        </Typography>
        <Typography>
          Meddelandet har skickats. Vi återkommer så snart som möjligt.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      id="contact-form"
      sx={{
        padding: isMobile ? '20px' : '40px',
        scrollMarginTop: '100px',
        background: `linear-gradient(to bottom, #ffffff 0%, #f8f1f1 10%, #f8f1f1 100%)`,
      }}
    >
      <Title title="kontakta" subTitle="oss" />

      <Typography sx={{ textAlign: 'center', mb: 2 }}>
        Första steget mot er samberedskap
        <br />
        Fyll i formuläret eller skriv till <b>info@krissakra.se</b>, så
        kontaktar vi dig för en kostnadsfri föreläsning och konsultation.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 600, mx: 'auto' }}
      >
        <TextField
          label="Ditt namn"
          name="namn"
          type="text"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Epost"
          name="email"
          type="email"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Telefon nummer"
          name="phone"
          type="text"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Meddelande"
          name="message"
          type="text"
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={consent}
              onChange={handleConsentChange}
              required
              sx={{
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  backgroundColor: 'transparent',
                },
              }}
            />
          }
          label="Jag godkänner att mina uppgifter skickas via e-post och behandlas i enlighet med gällande dataskyddsregler GDPR"
        />
        <Tooltip
          title="Du måste godkänna GDRP och fylla i formuläret innan du kan skicka."
          disableHoverListener={consent}
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: '#ba2c2c',
                color: '#fff',
                fontSize: '0.875rem',
                padding: '8px 12px',
                borderRadius: '4px',
              },
            },
          }}
        >
          <span>
            <Button
              type="submit"
              aria-label="Skicka kontaktformulär eller meddelande"
              variant="contained"
              color="primary"
              fullWidth
              disabled={state.submitting || !consent}
              sx={{
                mt: 2,
                height: '3rem',
                backgroundColor: '#ba2c2c',
                transition: 'transform 0.3s, background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#ba2c2c',
                  transform: 'scale(1.02)',
                },
              }}
            >
              Skicka
            </Button>
          </span>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Contact;
