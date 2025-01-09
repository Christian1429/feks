import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import { loadGoogleMapsApi } from '../utils/loadGoogleMapsApi';
import MapIframe from '../components/MapIframe';
import LoadingMessage from '../components/LoadingMessage';

const ClientMap = () => {
  const [mapUrlLink, setMapUrlLink] = useState('');
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = process.env.VITE_MAPS_API_KEY;

    loadGoogleMapsApi(apiKey)
      .then(() => {
        setIsApiLoaded(true);
        axiosInstance
          .get('/auth/client/map')
          .then((res) => setMapUrlLink(res.data.mapUrl))
          .catch((e) => console.error(e));
      })
      .catch((error) => {
        console.error('Error loading Google Maps API:', error);
        setError(error);
      });
  }, []);

  return (
    <>{mapUrlLink ? <MapIframe src={mapUrlLink} /> : <LoadingMessage />}</>
  );
};

export default ClientMap;
