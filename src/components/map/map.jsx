import GoogleMapReact from 'google-map-react';

import './map.scss';

const Map = ({ location }) => (
    <div className='map'>
        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCHxlvogES2Axlu1ALabWd_Bx3Lv_uokWs',
                }}
                defaultCenter={location}
                defaultZoom={5}></GoogleMapReact>
        </div>
    </div>
);

export default Map;
