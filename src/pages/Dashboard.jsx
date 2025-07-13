import '../index.css';
import GetClients from '../components/dash/GetClients';
import CreateClient from '../components/dash/CreateClient';
import UploadArticle from '../components/dash/UploadArticle';
import { useLogout } from '../utils/handleLogout';
import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  AppBar,
  Toolbar,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Dashboard = () => {
  const [selected, setSelected] = useState('clients');
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = useLogout(); 

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000000ff',
        color: '#fff',
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'clients'}
            onClick={() => {
              setSelected('clients');
              if (isMobile) setMobileOpen(false);
            }}
            sx={{ color: 'inherit' }}
          >
            <ListItemText primary="Klienter" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'create'}
            onClick={() => {
              setSelected('create');
              if (isMobile) setMobileOpen(false);
            }}
            sx={{ color: 'inherit' }}
          >
            <ListItemText primary="Skapa användare" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={selected === 'upload'}
            onClick={() => {
              setSelected('upload');
              if (isMobile) setMobileOpen(false);
            }}
            sx={{ color: 'inherit' }}
          >
            <ListItemText primary="Lägg upp artikel" />
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={{ px: 2, paddingBottom: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => {
            handleLogout();
            if (isMobile) setMobileOpen(false);
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  const renderContent = () => {
    switch (selected) {
      case 'clients':
        return <GetClients />;
      case 'create':
        return <CreateClient />;
      case 'upload':
        return <UploadArticle />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {isMobile && (
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
            paddingTop: isMobile ? '64px' : 0,
            backgroundColor: '#121212',
            color: '#fff',
            height: isMobile ? 'calc(100vh - 64px)' : '100vh',
            top: isMobile ? '56px' : 0,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: isMobile ? '64px' : 0,
          bgcolor: '#ffffffff',
          minHeight: '100vh',
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;
