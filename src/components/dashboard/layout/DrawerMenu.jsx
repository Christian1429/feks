import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import { useLogout } from '../../../utils/handleLogout';

const DrawerMenu = ({
  mobileOpen,
  handleDrawerToggle,
  isMobile,
  selected,
  setSelected,
}) => {
  const handleLogout = useLogout();

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
          paddingTop: isMobile ? '64px' : 0,
          backgroundColor: '#000',
          color: '#fff',
          height: isMobile ? 'calc(100vh - 64px)' : '100vh',
          top: isMobile ? '56px' : 0,
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <List sx={{ flexGrow: 1 }}>
          {[
            { key: 'clients', label: 'Klienter' },
            { key: 'create', label: 'Skapa användare' },
            { key: 'upload', label: 'Lägg upp artikel' },
            { key: 'articles', label: 'Artiklar' },
          ].map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton
                selected={selected === item.key}
                onClick={() => {
                  setSelected(item.key);
                  if (isMobile) handleDrawerToggle();
                }}
                sx={{ color: 'inherit' }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ px: 2, pb: 4 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              handleLogout();
              if (isMobile) handleDrawerToggle();
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
