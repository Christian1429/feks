import '../index.css';
import { Container, Grid, Paper, Box } from '@mui/material';
import GetClients from '../components/dash/GetClients';
import CreateClient from '../components/dash/CreateClient';
import UploadArticle from '../components/dash/UploadArticle';

const Dashboard = () => {
  return (
    <Container
      className="dash"
      maxWidth={false}
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <Box p={2}>
              <GetClients />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <Box p={2}>
              <CreateClient />
            </Box>
          </Paper>
        </Grid>
        <Grid>
          <Box p={4}>
            <Paper>
              <UploadArticle />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
