import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-red-950 text-center px-8 py-8 text-white">
      <div className="flex justify-center flex-wrap mb-6">
        <SocialLinks itemClass="footer-icon" />
      </div>
      <p className="text-sm tracking-wide capitalize">
        &copy; {new Date().getFullYear()} Krissäkra Sverige AB. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
