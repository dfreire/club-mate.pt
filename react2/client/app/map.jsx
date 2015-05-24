import React from "react/addons";
import {GoogleMaps} from "react-google-maps";

class Map extends React.Component {

    render () {
        const {props, state} = this,
        {googleMapsApi, otherProps} = props;

        return (
            <GoogleMaps containerProps={{
                    otherProps,
                    style: {
                        height: "500px",
                    },
                }}
                googleMapsApi={google.maps}
                zoom={6}
                center={{lat: 39.6833333, lng: -8.1166667}} />
        );
    }

}

export default Map;
