import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface MobileAppBarProps {
  handleDrawerToggle: () => void;
}

const MobileAppBar: React.FC<MobileAppBarProps> = ({ handleDrawerToggle }) => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      <IconButton
        className="mr-2"
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Admin
      </Typography>
    </Toolbar>
  </AppBar>
);

export default MobileAppBar;
