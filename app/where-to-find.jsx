import React from "react/addons";
import Router from "react-router";

import Map from "./map.jsx";

let Marks = [{
    type: "restaurant",
    key: "espacocompasso",
    name: "Espaço Compasso",
    addressLine1: "Rua da Torrinha, 113",
    addressLine2: "4050-609 Porto",
    city: "Porto",
    position: {
        lat: 41.1524767, lng: -8.6199931
    }
}, {
    type: "restaurant",
    key: "casa-d-oro",
    name: "Casa D'Oro",
    addressLine1: "Rua do Ouro, 797",
    addressLine2: "4150 Porto",
    city: "Porto",
    position: {
        lat: 41.148056, lng: -8.642722
    }
}, {
    type: "restaurant",
    key: "pizza-a-pezzi",
    name: "Pizza a Pezzi",
    addressLine1: "Praça Guilherme Gomes Fernandes, 57",
    addressLine2: "4050-293 Porto",
    city: "Porto",
    position: {
        lat: 41.1477907, lng: -8.6149328
    }
}, {
    type: "restaurant",
    key: "black-mamba",
    name: "Black Mamba",
    addressLine1: "Rua Mártires da Liberdade, 130",
    addressLine2: "4000 Porto",
    city: "Porto",
    position: {
        lat: 41.151276, lng: -8.613917
    }
}, {
    type: "restaurant",
    key: "sins",
    name: "Sins",
    addressLine1: "Rua da Conceição, 59",
    addressLine2: "Porto",
    city: "Porto",
    position: {
        lat: 41.149968, lng: -8.6144417
    }
}, {
    type: "restaurant",
    key: "ccop",
    name: "Café CCOP",
    addressLine1: "Rua Duque Loulé, 202",
    addressLine2: "Porto",
    city: "Porto",
    position: {
        lat: 41.1446968, lng: -8.6046485
    }
}, {
    type: "bar",
    key: "maus-habitos",
    name: "Maus Hábitos",
    addressLine1: "R. de Passos Manuel, 178, 4º Piso",
    addressLine2: "4000-382 Porto",
    city: "Porto",
    position: {
        lat: 41.146703, lng: -8.605738
    }
}, {
    type: "bar",
    key: "plano-b",
    name: "Plano B",
    addressLine1: "Rua Cândido dos Reis, 30",
    addressLine2: "4050-150 Porto",
    city: "Porto",
    position: {
        lat: 41.146518, lng: -8.613898
    }
}, {
    type: "bar",
    key: "pop-101",
    name: "Pop 101",
    addressLine1: "Rua de Trás, 101",
    addressLine2: "Porto",
    city: "Porto",
    position: {
        lat: 41.145516, lng: -8.613792
    }
}, {
    type: "bar",
    key: "era-uma-vez-no-porto",
    name: "Era uma vez no Porto",
    addressLine1: "Rua das Carmelitas, 162",
    addressLine2: "4050-161 Porto",
    city: "Porto",
    position: {
        lat: 41.146942, lng: -8.615011
    }
}, {
    type: "bar",
    key: "era-uma-vez-em-paris",
    name: "Era uma vez em Paris",
    addressLine1: "Rua Galeria de Paris, 106-108",
    addressLine2: "4050-284 Porto",
    city: "Porto",
    position: {
        lat: 41.1471739, lng: -8.6143639
    }
}, {
    type: "bar",
    key: "candelabro",
    name: "Candelabro",
    addressLine1: "Rua da Conceição, 3",
    addressLine2: "Porto",
    city: "Porto",
    position: {
        lat: 41.1499998, lng: -8.6131836
    }
}, {
    type: "grocery",
    key: "petulia",
    name: "Petúlia",
    addressLine1: "Rua de Júlio Dinis, 775",
    addressLine2: "4150-323 Porto",
    city: "Porto",
    position: {
        lat: 41.1554788, lng: -8.6275579
    }
}, {
    type: "grocery",
    key: "donarosa",
    name: "Dona Rosa",
    addressLine1: "Mercado do Bolhão Loja 1",
    addressLine2: "4000-252 Porto",
    city: "Porto",
    position: {
        lat: 41.14872, lng: -8.607466
    }
}, {
    type: "grocery",
    key: "rodela",
    name: "Mercearia Rodela",
    addressLine1: "Praça Guilherme Gomes Fernandes, 66",
    addressLine2: "4050-294 Porto",
    city: "Porto",
    position: {
        lat: 41.1477441, lng: -8.6144663
    }
}, {
    type: "grocery",
    key: "rodela2",
    name: "Mercearia Rodela 2",
    addressLine1: "Rua Saraiva Carvalho, 47",
    addressLine2: "4000-520 Porto",
    city: "Porto",
    position: {
        lat: 41.1432659, lng: -8.6095884
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

function getMarks(type, city) {
    let _marks = [];
    Marks.forEach((mark, i) => {
        if (mark.type === type && mark.city === city) {
            _marks.push(mark);
        }
    });
    return _marks;
}

function getKey(record) {
    return record.key;
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
                    <div className="col-lg-11">
                        <Map marks={Marks}/>
                    </div>
                </div>
                <div style={{marginTop: 25}} className="row">
                    <div className="col-lg-12">
                        <h1>Porto</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Bares</h3>
                            </div>
                            {getMarks('bar', 'Porto').map(function(mark, i) {
                                return (
                                    <div key={"mark-"+i} className="col-lg-12">
                                        {mark.content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Restaurantes</h3>
                            </div>
                            {getMarks('restaurant', 'Porto').map(function(mark, i) {
                                return (
                                    <div key={"mark-"+i} className="col-lg-12">
                                        {mark.content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Mercearias</h3>
                            </div>
                            {getMarks('grocery', 'Porto').map(function(mark, i) {
                                return (
                                    <div key={"mark-"+i} className="col-lg-12">
                                        {mark.content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 25}} className="row">
                    <div className="col-lg-12">
                        <h1>Lisboa</h1>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        );
    }
});
