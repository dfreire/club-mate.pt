import React from "react/addons";
import Router from "react-router";

import Map from "./map.jsx";

var Marks = [{
    key: "casa-d-oro",
    name: "Casa D'Oro",
    addressLine1: "Rua do Ouro, 797",
    addressLine2: "4150 Porto",
    position: {
        lat: 41.148056, lng: -8.642722
    }
}, {
    key: "pizza-a-pezzi",
    name: "Pizza a Pezzi",
    addressLine1: "Praça de Guilherme Gomes Fernandes, 57",
    addressLine2: "4050-293 Porto",
    position: {
        lat: 41.1477907, lng: -8.6149328
    }

}, {
    key: "maus-habitos",
    name: "Maus Hábitos",
    addressLine1: "R. de Passos Manuel, 178, 4º Piso",
    addressLine2: "4000-382 Porto",
    position: {
        lat: 41.146703, lng: -8.605738
    }

}, {
    key: "black-mamba",
    name: "Black Mamba",
    addressLine1: "Rua Mártires da Liberdade, 130",
    addressLine2: "4000 Porto",
    position: {
        lat: 41.151276, lng: -8.613917
    }
}, {
    key: "plano-b",
    name: "Plano B",
    addressLine1: "Rua Cândido dos Reis, 30",
    addressLine2: "4050-150 Porto",
    position: {
        lat: 41.146518, lng: -8.613898
    }
/*
}, {
    key: "",
    name: "",
    addressLine1: "",
    addressLine2: "",
    position: {
        lat: , lng:
    }
*/
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
