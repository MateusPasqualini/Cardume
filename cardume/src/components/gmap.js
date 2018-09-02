import React, { Component } from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps';

class GMap extends React.Component {
      
    render() { 
        return (
            <div className="g-map">
                <GoogleMap 
                    defaultZoom={3}
                    defaultCenter={{lat:-25.363882, lng: 131.044922}} 
                    
                >
                </GoogleMap>
            </div>
        );
    } 
}
export default withGoogleMap(GMap);