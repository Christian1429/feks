import { useState, useEffect } from 'react';
import { getProfile } from '../../../api/client';
import '../../../index.css';

const ClientProfile = () => {
  const [client, setClient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await getProfile();
        setClient(data);
      } catch (error) {
        console.error('Error fetching client:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClient();
  }, []);

  if (isLoading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">Fel vid hämtning av profil.</div>;

  return (
    <div className="client-profile">
      {client && (
        <div className="profile-card">
          <ul className="profile-list">
            <li className="profile-item">
              <strong>{client.company ? 'Företag' : 'BRF'}:</strong>{' '}
              {client.brf || client.company}
            </li>
            <li className="profile-item">
              <strong>Org:</strong> {client.org}
            </li>
            <li className="profile-item">
              <strong>Email:</strong> {client.email}
            </li>
            <li className="profile-item">
              <strong>Adress:</strong> {client.address}
            </li>
            <li className="profile-item">
              <strong>Post adress:</strong> {client.areacode}
            </li>
            <li className="profile-item">
              <strong>Kontakt person:</strong> {client.client}
            </li>
            <li className="profile-item">
              <strong>Medlemskap:</strong> {client.fromDate} - {client.toDate}
            </li>
            <li className="profile-item">
              <strong>Telefon nummer:</strong> {client.phone}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClientProfile;
