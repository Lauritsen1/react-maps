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
        containerElement={<div className="googlemap-container" />}
        mapElement={<div className="googlemap-element" />}
      />
    </div>
  );

};

export default Map;