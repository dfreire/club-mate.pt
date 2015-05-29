import React from "react/addons";
import {GoogleMaps, Marker, InfoWindow} from "react-google-maps";

export default React.createClass({
    getInitialState: function() {
        return { zoom: 6, center: {lat: 39.6833333, lng: -8.1166667}, markWithInfo: undefined };
    },

    _onZoomChanged: function() {
    },

    _onCenterChanged: function() {
    },

    _onMarkerClicked: function(mark) {
        this.setState({ markWithInfo: mark });
    },

    render: function() {
        return (
            <GoogleMaps containerProps={{
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
                        var infoWindow;
                        if (mark === this.state.markWithInfo) {
                            infoWindow = (<InfoWindow position={mark.position} content={$("#"+mark.key).html()} />);
                        }
                        return (
                            <Marker
                                key={mark.key}
                                position={mark.position}
                                onClick={function() { this._onMarkerClicked(mark); }.bind(this)}
                                icon="/img/club-mate-marker.png">
                                    {infoWindow}
                            </Marker>
                        );
                    }.bind(this))}
            </GoogleMaps>

        );
    }
});
