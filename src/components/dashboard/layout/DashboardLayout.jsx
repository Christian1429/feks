import DrawerMenu from './DrawerMenu';
import MobileAppBar from './MobileAppBar';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const DashboardLayout = ({
  mobileOpen,
  handleDrawerToggle,
  selected,
  setSelected,
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100dvh',
        backgroundImage:
          'url(https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/redd-f-RfY1OQqlT3U-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {isMobile && <MobileAppBar handleDrawerToggle={handleDrawerToggle} />}

      <DrawerMenu
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
        selected={selected}
        setSelected={setSelected}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: isMobile ? '64px' : 0,
          minHeight: '100dvh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
