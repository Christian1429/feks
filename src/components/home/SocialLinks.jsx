import { List, ListItem, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/profile.php?id=61558327136059',
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    href: 'https://www.instagram.com/krissakra/',
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    href: 'https://x.com/Krissakra',
    icon: <XIcon />,
  },
];

const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <ListItem className={itemClass} sx={{ width: 'auto', padding: 0 }}>
      <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          transition: 'transform 0.3s, color 0.3s',
          '&:hover': {
            transform: 'scale(1.2)',
            backgroundColor: 'transparent',
          },
        }}
      >
        {icon}
      </IconButton>
    </ListItem>
  );
};

const SocialLinks = ({ itemClass }) => {
  return (
    <List sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
      {socialLinks.map((link) => (
        <SocialLink
          {...link}
          key={link.id}
          itemClass={itemClass}
        />
      ))}
    </List>
  );
};

export default SocialLinks;
