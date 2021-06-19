import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


import "./map.scss";

const Map = ({lat, lng}) => {

  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: lat, lng: lng }}
      defaultZoom={5}
    >
    </GoogleMap>

  ));

  return (
    <div className="map-container">
      <GoogleMapExample
        containerElement={<div style={{height: `25em`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%`,  width: `100%` }} />}
      />
    </div>
  );

};

export default Map;