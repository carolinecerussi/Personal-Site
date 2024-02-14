import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  height: '190px',
  width: '190px',
  borderRadius: '50%',
  border: '2.3pt solid black',
  display: 'block',
 boxSizing:'border-box',

};
const mapStyle = {
backgroundColor:'transparent',
marginBottom:'4%',

width: '100%',
// marginLeft:'5px',
boxSizing:'border-box',

}
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
    
    <div style={mapStyle}>
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
  </div>
  ) : <></>
}

export default React.memo(MyComponent)