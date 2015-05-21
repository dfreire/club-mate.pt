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
                        height: "300px",
                    },
                }}
                googleMapsApi={google.maps}
                zoom={3}
                center={{lat: -34.397, lng: 150.644}} />
        );
    }

}

export default Map;
