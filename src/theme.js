import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BA2C2C',
    },
    secondary: {
      main: '#DC7985',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#DC7985',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#BA2C2C',
          transition: 'color 0.6s ease',
          fontSize: '1.8rem',
          '&:hover': {
            color: '#DC7985',
          },
        },
      },
    },
  },
});

export default theme;