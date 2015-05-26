import React from "react/addons";
import {GoogleMaps, Marker, InfoWindow} from "react-google-maps";

class Map extends React.Component {

    constructor(args) {
        super(args);
        this.state = { zoom: 6, marks: [], markWithInfo: undefined };
        this.state.marks.push({ position: { lat: 41.148056,  lng: -8.642722  }, key: "casa-d-oro" });
        this.state.marks.push({ position: { lat: 38.7159764, lng: -9.1467839 }, key: "pizza-a-pezzi" });
        //this.state.markWithInfo = this.state.marks[0];
    }

    _handleMarkerClick(mark) {
        console.warn("_handleMarkerClick", mark);
        this.setState({ markWithInfo: mark });
    }

    render() {
        var that = this;
        var hasMarkWithInfo = _.isObject(this.state.markWithInfo);
        console.warn("render markWithInfo", hasMarkWithInfo);
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
                zoom={this.state.zoom}
                center={{lat: 39.6833333, lng: -8.1166667}}>
                {this.state.marks.map(function(mark, index) {
                    var markerTag = <Marker
                        position={mark.position}
                        key={mark.key}
                        onClick={function() {
                            that._handleMarkerClick(mark);
                        }}
                        icon="/img/club-mate-marker.png" />;

                    if (mark === that.state.markWithInfo) {
                        return <div>{React.addons.createFragment({
                                a: { markerTag },
                                b: <InfoWindow position={that.state.markWithInfo.position} content="hello" />
                        })}</div>
                    } else {
                        return { markerTag };
                    }
                })}
            </GoogleMaps>

        );
    }

}

export default Map;
