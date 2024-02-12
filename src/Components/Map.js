import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  border: '2.4pt solid black',
  display: 'inline-block',
};

const center = {
  lat: 45.523064,
  lng: -122.676483,


};


function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDoIe6DcgX_IbyR54OY6sC0eCEXNhPVfEw",
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {

    const bounds = new window.google.maps.LatLngBounds(center);

    map.fitBounds(bounds);


    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const mapOptions = {
    fullscreenControl: false,
    disableDefaultUI: true,
    mapTypeId: 'satellite',
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onUnmount={onUnmount}
      options={mapOptions}

    >
      <>
      </>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)