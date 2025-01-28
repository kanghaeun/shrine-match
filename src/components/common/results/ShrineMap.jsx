import { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const ShrineMap = ({ location }) => {
  const [center, setCenter] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
    libraries: ['places'],
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
    if (center) {
      map.panTo(center);
    }
  }, [center]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    const searchPlace = async () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        const service = new window.google.maps.places.PlacesService(document.createElement("div"));

        const request = {
          query: location,
          fields: ["geometry"],
        };

        service.findPlaceFromQuery(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
            const locationResult = results[0].geometry.location;
            setCenter({
              lat: locationResult.lat(),
              lng: locationResult.lng(),
            });

          } else {
            console.error(`Geocode was not successful: ${status}`);
          }
        });
      } else {
        console.error("Google Maps or Places library is not loaded.");
      }
    };
    if (isLoaded && location) {
      searchPlace();
    }
  }, [isLoaded, location]);

  return isLoaded && center ? (
    <div>
      <GoogleMap
        mapContainerStyle={{
          marginTop: '20px',
          height: '460px',
          width: '460px',
        }}
        zoom={19}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      </GoogleMap>
    </div>
  ) : <div>Loading...</div>;
};

export default ShrineMap;
