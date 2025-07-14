import '../index.css';
import { Container } from '@mui/material';
import ClientProfile from '../components/dashboard/user/ClientProfile';
import ClientMaps from '../components/dashboard/user/ClientMaps';

const UserDashboard = () => {
  return (
    <Container
      className="dash"
      maxWidth={false}
      sx={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <ClientProfile />
      <ClientMaps />
    </Container>
  );
};

export default UserDashboard;
