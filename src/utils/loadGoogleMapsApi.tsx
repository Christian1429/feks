let googleMapsApiPromise: Promise<void> | undefined;

export const loadGoogleMapsApi = (apiKey: string): Promise<void> => {
  if (!googleMapsApiPromise) {
    googleMapsApiPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  }
  return googleMapsApiPromise;
};
