import { useState, useEffect } from 'react';
import { getProfile } from '../../../api/clientApi';
import '../../../index.css';
import type { Client } from '../../../types/Client';

const ClientProfile: React.FC = () => {
  const [client, setClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const data = await getProfile();
        setClient(data);
      } catch (error) {
        console.error('Error fetching client:', error);
        setError(error instanceof Error ? error : new Error(String(error)));
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
