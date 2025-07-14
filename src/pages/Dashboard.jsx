import { useState } from 'react';
import DashboardLayout from '../components/dash/admin/DashboardLayout';
import GetClients from '../components/dash/admin/GetClients';
import CreateClient from '../components/dash/admin/PostClient';
import UploadArticle from '../components/dash/admin/PostArticle';
import DeleteArticle from '../components/dash/admin/DeleteArticle';

const Dashboard = () => {
  const [selected, setSelected] = useState('clients');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderContent = () => {
    switch (selected) {
      case 'clients':
        return <GetClients />;
      case 'create':
        return <CreateClient />;
      case 'upload':
        return <UploadArticle />;
      case 'articles':
        return <DeleteArticle />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      selected={selected}
      setSelected={setSelected}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;
