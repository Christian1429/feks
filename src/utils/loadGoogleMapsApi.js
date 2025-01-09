export const loadGoogleMapsApi = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (
      typeof window.google === 'object' &&
      typeof window.google.maps === 'object'
    ) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry&v=weekly`;
    script.async = true;
    script.defer = true;
    script.setAttribute('loading', 'async');
    script.onload = () => {
      resolve();
    };
    script.onerror = (error) => {
      console.error('Error loading Google Maps API:', error);
      reject(error);
    };
    document.head.appendChild(script);
  });
};
