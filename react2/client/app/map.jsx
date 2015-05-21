import React from "react/addons";
import {GoogleMaps} from "react-google-maps";

class SimpleMap extends React.Component {

    render () {
        console.log("render map");
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
                zoom={8}
                center={{lat: -34.397, lng: 150.644}} />
        );
    }

}

export default SimpleMap;
