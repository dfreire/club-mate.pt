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

function getRestaurantHtml(restaurant) {
    var gmapsCaption = restaurant.position.lat + ", " + restaurant.position.lng;
    var gmapsHref = "https://www.google.pt/maps/@" + restaurant.position.lat + "," + restaurant.position.lng + ",20z";
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
}

export var WhereToFind = React.createClass({
    mixins: [Router.State],

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
                        <Map marks={Restaurants}/>
                    </div>
                    <div className="col-lg-4">
                        {Restaurants.map(function(restaurant, index) {
                            return getRestaurantHtml(restaurant);
                        })}
                    </div>
                </div>
            </div>
        );
    }
});
