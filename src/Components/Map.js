import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "../css/map.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDoIe6DcgX_IbyR54OY6sC0eCEXNhPVfEw',
  });
  const center = useMemo(() => ({ lat:45.5152, lng:'-122.6784'}), []);

  return (
    <div className="Map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={5}
        >
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;