import React from "react/addons";
import {GoogleMaps, Marker, InfoWindow} from "react-google-maps";

export default React.createClass({
    getInitialState: function() {
        return { zoom: 6, center: {lat: 39.6833333, lng: -8.1166667}, markWithInfo: undefined };
    },

    _onZoomChanged: function() {
        var zoom = this.refs.map.getZoom();
        if (zoom !== this.state.zoom) {
            this.setState({zoom: zoom});
            console.log("_onZoomChanged", zoom);
        }
    },

    _onCenterChanged: function() {
        var center = this.refs.map.getCenter();
        if (center !== this.state.center) {
            this.setState({center: center});
            console.log("_onCenterChanged", center);
        }
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
                ref="map"
                googleMapsApi={google.maps}
                zoom={this.state.zoom}
                onZoomChanged={this._onZoomChanged}
                center={this.state.center}
                onCenterChanged={this._onCenterChanged}>
                    {this.props.marks.map(function(mark, index) {
                        var infoWindow;
                        if (mark === this.state.markWithInfo) {
                            infoWindow = (
                                <InfoWindow
                                    position={mark.position}
                                    onCloseclick={function() { this._onMarkerClicked(); }.bind(this)}
                                    content={$("#"+mark.key).html()} />
                            );
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
