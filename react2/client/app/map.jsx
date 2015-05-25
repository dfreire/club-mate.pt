import React from "react/addons";
import {GoogleMaps, Marker} from "react-google-maps";

class Map extends React.Component {

    constructor(args) {
        super(args);
        this.state = { marks: [] };
        this.state.marks.push({ position: { lat: 41.148056,  lng: -8.642722  }, key: "casa-d-oro" });
        this.state.marks.push({ position: { lat: 38.7159764, lng: -9.1467839 }, key: "pizza-a-pezzi" });
    }

    render() {
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
                center={{lat: 39.6833333, lng: -8.1166667}}>
                {this.state.marks.map(function(mark, index) {
                    return <Marker position={mark.position} key={mark.key} icon="/img/club-mate-marker.png" />;
                })}
            </GoogleMaps>

        );
    }

}

export default Map;
