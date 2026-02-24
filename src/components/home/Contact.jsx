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
        background: `linear-gradient(to bottom, #ffffff 0%, #f8f1f1 10%, #d2d2d2ff 100%)`,
      }}
    >
      <Title title="kontakta" subTitle="oss" />

      <Typography sx={{ textAlign: 'center', mb: 2 }}>
        Första steget mot er samberedskap
        <br />
        <b>info@krissakra.se</b>
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 600, mx: 'auto' }}
      >
        <div className="mb-4">
          <label
            htmlFor="namn"
            className="block mb-1 font-semibold text-gray-700"
          >
            Ditt namn
          </label>
          <input
            type="text"
            id="namn"
            name="namn"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-gray-700"
          >
            Epost
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-1 font-semibold text-gray-700"
          >
            Telefon nummer
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-1 font-semibold text-gray-700"
          >
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 resize-vertical bg-white"
          ></textarea>
        </div>

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
