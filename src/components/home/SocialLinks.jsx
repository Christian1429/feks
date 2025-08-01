import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com/profile.php?id=61558327136059',
    icon: <FacebookIcon fontSize="medium" />,
    label: 'Facebook',
  },
  {
    id: 2,
    href: 'https://www.instagram.com/krissakra/',
    icon: <InstagramIcon fontSize="medium" />,
    label: 'Instagram',
  },
  {
    id: 3,
    href: 'https://x.com/Krissakra',
    icon: <XIcon fontSize="medium" />,
    label: 'X (Twitter)',
  },
];

const SocialLink = ({ href, icon, label }) => (
  <li className="mx-2 w-auto">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Besök vår ${label} sida`}
      className="inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:text-red-600 transition-transform duration-300 ease-in-out hover:scale-110"
    >
      {icon}
    </a>
  </li>
);

const SocialLinks = () => (
  <ul className="flex justify-center p-0 list-none">
    {socialLinks.map((link) => (
      <SocialLink key={link.id} {...link} />
    ))}
  </ul>
);

export default SocialLinks;
