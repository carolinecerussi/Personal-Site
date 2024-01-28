import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '200px',
  borderRadius:'2pt',

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

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onUnmount={onUnmount}
        mapTypeId= 'satellite'
      >
        <>
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)