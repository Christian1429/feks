import { useState } from 'react';
import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
import GetClients from '../components/dashboard/admin/GetClients';
import CreateClient from '../components/dashboard/admin/PostClient';
import UploadArticle from '../components/dashboard/admin/PostArticle';
import DeleteArticle from '../components/dashboard/admin/DeleteArticle';

type DashboardSection = 'clients' | 'create' | 'upload' | 'articles';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<DashboardSection>('clients');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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
