import '../index.css';
import { Container } from '@mui/material';
import ClientProfile from '../components/dashboard/user/ClientProfile';
import ClientMaps from '../components/dashboard/user/ClientMaps';

const UserDashboard = () => {
  return (
    <Container>
      <ClientProfile />
      <ClientMaps />
    </Container>
  );
};

export default UserDashboard;
