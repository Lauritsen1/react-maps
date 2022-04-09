import GoogleMapReact from 'google-map-react';

import './map.scss';

const Map = ({ location }) => (
    <div className='map'>
        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={location}
                defaultZoom={5}></GoogleMapReact>
        </div>
    </div>
);

export default Map;
