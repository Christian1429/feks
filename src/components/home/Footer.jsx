import React from 'react';
import { Box, Typography } from '@mui/material';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="section footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 0',
      }}
    >
      <SocialLinks itemClass="nav-icon" />
      <Typography className="copyright" sx={{ marginTop: '1rem' }}>
        &copy; {new Date().getFullYear()} Krissäkra Sverige AB. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
