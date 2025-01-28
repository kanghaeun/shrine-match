import { useState, useEffect } from "react";
import styled from "styled-components";
import { SHRINE_MAP_URLS } from "../../../constants/shrineMapUrl";

const ShrineMap = ({ shrineId }) => {
  const [embedUrl, setEmbedUrl] = useState(null);

  useEffect(() => {
    const baseUrl = SHRINE_MAP_URLS[shrineId];
    if (baseUrl) {
      setEmbedUrl(`${baseUrl}?z=50`);
    } else {
      console.error(`Invalid shrineId: ${shrineId}`);
      setEmbedUrl(null);
    }
  }, [shrineId]);


  return embedUrl ? (
    <MapContainer>
      <iframe 
        src={embedUrl} 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy">
      </iframe>
    </MapContainer>
  ) : (
    <div>Loading...</div>
  );
};

export default ShrineMap;

const MapContainer = styled.div`
  margin: 20px 0;
  height: auto;
  width: 100%;
`;