import React from "react/addons";
import {GoogleMaps, Marker, InfoWindow} from "react-google-maps";

class Map extends React.Component {

    constructor(args) {
        super(args);
        this.state = { zoom: 6, center: {lat: 39.6833333, lng: -8.1166667}, markWithInfo: undefined };
    }

    _onZoomChanged() {
    }

    _onCenterChanged() {
    }

    _onMarkerClicked(mark) {
        this.setState({ markWithInfo: mark });
    }

    render() {
        var hasMarkWithInfo = _.isObject(this.state.markWithInfo);

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
                onZoomChanged={this._onZoomChanged}
                center={this.state.center}
                onCenterChanged={this._onCenterChanged}>
                {this.props.marks.map(function(mark, index) {
                    if (mark === this.state.markWithInfo) {
                        return <Marker
                            key={mark.key}
                            position={mark.position}
                            onClick={function() { this._onMarkerClicked(mark); }.bind(this)}
                            icon="/img/club-mate-marker.png">;
                            <InfoWindow position={mark.position} content={$("#"+mark.key).html()} />
                        </Marker>
                    } else {
                        return <Marker
                            key={mark.key}
                            position={mark.position}
                            onClick={function() { this._onMarkerClicked(mark); }.bind(this)}
                            icon="/img/club-mate-marker.png" />;
                    }
                }.bind(this))}
            </GoogleMaps>

        );
    }

}

export default Map;
