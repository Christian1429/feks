import { useEffect, useState } from 'react';
import { loadGoogleMapsApi } from '../../../utils/loadGoogleMapsApi';

const ClientMaps = () => {
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_MAPS_API_KEY;

    loadGoogleMapsApi(apiKey)
      .then(() => {
        setIsApiLoaded(true);
      })
      .catch((error) => {
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
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ClientMaps;
