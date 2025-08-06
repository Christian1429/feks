import { useEffect, useState } from 'react';
import { loadGoogleMapsApi } from '../../../utils/loadGoogleMapsApi';

const ClientMaps: React.FC = () => {
  const [isApiLoaded, setIsApiLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_MAPS_API_KEY as string;

    loadGoogleMapsApi(apiKey)
      .then(() => {
        setIsApiLoaded(true);
      })
      .catch((error: Error) => {
        console.error('Error loading Google Maps API:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading Google Maps API</div>;
  }

  return (
    <div style={{ width: '100%', height: '600px', touchAction: 'none' }}>
      {isApiLoaded ? (
        <iframe
          src="https://snazzymaps.com/embed/602031"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Google Maps"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ClientMaps;
