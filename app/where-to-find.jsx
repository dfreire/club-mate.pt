import React from "react/addons";
import Router from "react-router";

import Map from "./map.jsx";

function getKey(record) {
    return record.key;
}

var Restaurants = _.sortBy([{
    /*
     Espaço Compasso

    4050 609, Rua da Torrinha 113, Porto
     */
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
    addressLine1: "Praça Guilherme Gomes Fernandes, 57",
    addressLine2: "4050-293 Porto",
    position: {
        lat: 41.1477907, lng: -8.6149328
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
    key: "sins",
    name: "Sins",
    addressLine1: "Rua da Conceição, 59",
    addressLine2: "Porto",
    position: {
        lat: 41.149968, lng: -8.6144417
    }
}, {
    key: "ccop",
    name: "Café CCOP",
    addressLine1: "Rua Duque Loulé, 202",
    addressLine2: "Porto",
    position: {
        lat: 41.1446968, lng: -8.6046485
    }
}], getKey);

var Bars = _.sortBy([{
    key: "maus-habitos",
    name: "Maus Hábitos",
    addressLine1: "R. de Passos Manuel, 178, 4º Piso",
    addressLine2: "4000-382 Porto",
    position: {
        lat: 41.146703, lng: -8.605738
    }
}, {
    key: "plano-b",
    name: "Plano B",
    addressLine1: "Rua Cândido dos Reis, 30",
    addressLine2: "4050-150 Porto",
    position: {
        lat: 41.146518, lng: -8.613898
    }
}, {
    key: "pop-101",
    name: "Pop 101",
    addressLine1: "Rua de Trás, 101",
    addressLine2: "Porto",
    position: {
        lat: 41.145516, lng: -8.613792
    }
}, {
    key: "era-uma-vez-no-porto",
    name: "Era uma vez no Porto",
    addressLine1: "Rua das Carmelitas, 162",
    addressLine2: "4050-161 Porto",
    position: {
        lat: 41.146942, lng: -8.615011
    }
}, {
    key: "era-uma-vez-em-paris",
    name: "Era uma vez em Paris",
    addressLine1: "Rua Galeria de Paris, 106-108",
    addressLine2: "4050-284 Porto",
    position: {
        lat: 41.1471739, lng: -8.6143639
    }
}, {
    key: "candelabro",
    name: "Candelabro",
    addressLine1: "Rua da Conceição, 3",
    addressLine2: "Porto",
    position: {
        lat: 41.1499998, lng: -8.6131836
    }
}], getKey);

var Groceries = _.sortBy([{
    key: "petulia",
    name: "Petúlia",
    addressLine1: "Rua de Júlio Dinis, 775",
    addressLine2: "4150-323 Porto",
    position: {
        lat: 41.1554788, lng: -8.6275579
    }
}, {
    key: "donarosa",
    name: "Dona Rosa",
    addressLine1: "Mercado do Bolhão Loja 1",
    addressLine2: "4000-252 Porto",
    position: {
        lat: 41.14872, lng: -8.607466
    }
}, {
    key: "rodela",
    name: "Mercearia Rodela",
    addressLine1: "Praça Guilherme Gomes Fernandes, 66",
    addressLine2: "4050-294 Porto",
    position: {
        lat: 41.1477441, lng: -8.6144663
    }
}, {
    key: "rodela2",
    name: "Mercearia Rodela 2",
    addressLine1: "Rua Saraiva Carvalho, 47",
    addressLine2: "4000-520 Porto",
    position: {
        lat: 41.1432659, lng: -8.6095884
    }
}], getKey);

/*
    key: "",
    name: "",
    addressLine1: "",
    addressLine2: "",
    position: {
        lat: , lng:
    }
*/

var Marks = _.union(Restaurants, Bars, Groceries);

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
                    <div className="col-lg-11">
                        <Map marks={Marks}/>
                    </div>
                </div>
                <div style={{ marginTop: "35px" }} className="row">
                    {Marks.map(function(mark, i) {
                        return (
                            <div key={"mark-"+i} className="col-lg-4">
                                {mark.content}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
});
