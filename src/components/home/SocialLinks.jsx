import { List, ListItem, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/profile.php?id=61558327136059',
    icon: <FacebookIcon />,
  },
  { id: 2, href: 'https://www.instagram.com', icon: <InstagramIcon /> },
  { id: 3, href: 'https://www.twitter.com', icon: <TwitterIcon /> },
];

const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <ListItem className={itemClass} sx={{ width: 'auto', padding: 0 }}>
      <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'inherit' }}
      >
        {icon}
      </IconButton>
    </ListItem>
  );
};

const SocialLinks = ({ itemClass }) => {
  return (
    <List
      sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}
    >
      {socialLinks.map((link) => (
        <SocialLink {...link} key={link.id} itemClass={itemClass} />
      ))}
    </List>
  );
};

export default SocialLinks;
