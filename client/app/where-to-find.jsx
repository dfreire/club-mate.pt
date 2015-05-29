import React from "react/addons";
import Router from "react-router";

import Map from "./map.jsx";

var Marks = [{
    key: "casadoro",
    name: "Restaurante Casa D'Oro",
    addressLine1: "Rua do Ouro, Nº797",
    addressLine2: "4150 Porto",
    position: {
        lat: 41.148056, lng: -8.642722
    }
}, {
    key: "pizzaapezzi",
    name: "Restaurante Pizza à Pezzi",
    addressLine1: "Rua Dom Pedro V, Nº84 (Príncipe Real)",
    addressLine2: "1250-001 Lisboa",
    position: {
        lat: 38.7159764, lng: -9.1467839
    }
}];

_.each(Marks, function(mark) {
    var gmapsCaption = mark.position.lat + ", " + mark.position.lng;
    var gmapsHref = "https://www.google.pt/maps/@" + mark.position.lat + "," + mark.position.lng + ",20z";
    mark.content = (
        <div key={mark.key}>
            <address id={mark.key}>
                <strong>{mark.name}</strong><br />
                <small>{mark.addressLine1}<br />
                {mark.addressLine2}<br />
                <a href={gmapsHref}>{gmapsCaption}</a><br /></small>
            </address>
        </div>
    );
});

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
                        <Map marks={Marks}/>
                    </div>
                    <div className="col-lg-4">
                        {Marks.map(function(mark, index) {
                            return mark.content;
                        })}
                    </div>
                </div>
            </div>
        );
    }
});
