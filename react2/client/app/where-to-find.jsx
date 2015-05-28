import React from "react/addons";
import Router from "react-router";

import Map from "./map.jsx";

var Restaurants = [{
    name: "Restaurante Casa D'Oro",
    addressLine1: "Rua do Ouro, Nº797",
    addressLine2: "4150 Porto",
    position: {
        lat: 41.148056, lng: -8.642722
    }
}, {
    name: "Restaurante Pizza à Pezzi",
    addressLine1: "Rua Dom Pedro V, Nº84 (Príncipe Real)",
    addressLine2: "1250-001 Lisboa",
    position: {
        lat: 38.7159764, lng: -9.1467839
    }
}];

function onWindowResize() {
    var h = $(window).height(),
        offsetTop = 150, // Calculate the top offset
        marginBotton = 30;

    $('#map-canvas').css('height', (h - offsetTop - marginBotton)).css('margin-bottom', marginBotton);
}

export var WhereToFind = React.createClass({
    mixins: [Router.State],

    getInitialState: function() {
        console.warn("getInitialState");
        return {};
    },

    componentDidMount: function() {
        console.warn("componentDidMount");
    },

    componentWillUnmount: function() {
        console.warn("componentWillUnmount");
    },

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Onde Encontrar</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Map />
                    </div>
                    <div className="col-lg-4">
                        {Restaurants.map(function(restaurant, index) {
                            var gmapsCaption = restaurant.position.lat + "," + restaurant.position.lng;
                            var gmapsHref = "https://www.google.pt/maps/@" + gmapsCaption + ",20z";
                            return (
                                <div>
                                    <address>
                                        <strong>{restaurant.name}</strong><br />
                                        {restaurant.addressLine1}<br />
                                        {restaurant.addressLine2}<br />
                                        <a href={gmapsHref}>{gmapsCaption}</a><br />
                                    </address>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
});
