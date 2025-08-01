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
    <Box className="flex min-h-[100dvh] bg-[url('https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/redd-f-RfY1OQqlT3U-unsplash.jpg')] bg-cover bg-fixed">
      {isMobile && <MobileAppBar handleDrawerToggle={handleDrawerToggle} />}

      <DrawerMenu
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
        selected={selected}
        setSelected={setSelected}
      />
      <Box className={`flex-grow p-2 min-h-[100dvh] ${isMobile ? 'mt-16' : 'mt-0'}`}
           component="main"
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
