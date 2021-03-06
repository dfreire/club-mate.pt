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
    type: "restaurant",
    key: "7-maravilhas",
    name: "7 Maravilhas",
    addressLine1: "Rua das Taipas 17C",
    addressLine2: "Porto",
    city: "Porto",
    position: {
        lat: 41.1428726, lng: -8.6174815
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
    type: "bar",
    key: "embaixada-lomografica",
    name: "Embaixada Lomográfica",
    addressLine1: "Praça de Carlos Alberto, 121",
    addressLine2: "Porto",
    city: "Porto",
    position: {
        lat: 41.1476609, lng: -8.6159161
    }
}, {
    type: "bar",
    key: "esad",
    name: "ESAD",
    addressLine1: "Av. Calouste Gulbenkian",
    addressLine2: "4460-268 Sra. da Hora",
    city: "Porto",
    position: {
        lat: 41.1847115, lng: -8.662153
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
    key: "mercearia-rodela",
    name: "Mercearia Rodela",
    addressLine1: "Praça Guilherme Gomes Fernandes, 66",
    addressLine2: "4050-294 Porto",
    city: "Porto",
    position: {
        lat: 41.1477441, lng: -8.6144663
    }
}, {
    type: "grocery",
    key: "mercearia-rodela-2",
    name: "Mercearia Rodela 2",
    addressLine1: "Rua Saraiva Carvalho, 47",
    addressLine2: "4000-520 Porto",
    city: "Porto",
    position: {
        lat: 41.1432659, lng: -8.6095884
    }
}, {
    type: "restaurant",
    key: "pizza-a-pezzi-merc-ribeira",
    name: "Pizza à Pezzi Merc. Ribeira",
    addressLine1: "Avenida 24 de Julho, Cais do Sodré",
    addressLine2: "Lisboa",
    city: "Lisboa",
    position: {
        lat: 38.707062, lng: -9.145825
    }
}, {
    type: "grocery",
    key: "pizza-a-pezzi-principe-real",
    name: "Pizza à Pezzi Príncipe Real",
    addressLine1: "Rua Dom Pedro V, 84",
    addressLine2: "Lisboa",
    notes: "(PVP equivalente a mercearia)",
    city: "Lisboa",
    position: {
        lat: 38.7159764, lng: -9.1467839
    }
}, {
    type: "restaurant",
    key: "mel-limao",
    name: "Mel & Limão",
    addressLine1: "Largo Pé da Cruz, 25",
    addressLine2: "Faro",
    city: "Resto",
    position: {
        lat: 37.015626, lng: -7.929619
    }
}, {
    type: "restaurant",
    key: "belos-aires",
    name: "Belos Aires",
    addressLine1: "Rua de Belmonte, 104",
    addressLine2: "4050-600 Porto",
    city: "Porto",
    position: {
        lat: 41.1425556, lng: -8.6172878
    }
}, {
    type: "restaurant",
    key: "pe-d-arroz",
    name: "Pé d'Arroz",
    addressLine1: "Rua do Godinho, 866",
    addressLine2: "4450-029 Matosinhos",
    city: "Porto",
    position: {
        lat: 41.184420, lng: -8.685054
    }
}, {
    type: "grocery",
    key: "eos",
    name: "EOS",
    addressLine1: "Rua de Santa Catarina, 1198",
    addressLine2: "4000-447 Porto",
    city: "Porto",
    position: {
        lat: 41.156807, lng: -8.604577
    }
}, {
    type: "bar",
    key: "atlas-hostel",
    name: "Atlas Hostel",
    addressLine1: "Rua Barão Viamonte, 59",
    addressLine2: "2400-137 Leiria",
    city: "Resto",
    position: {
        lat: 39.744716, lng: -8.809317
    }
}, {
    type: "bar",
    key: "belas-artes",
    name: "Belas Artes",
    addressLine1: "Av. Rodrigues de Freitas, 265",
    addressLine2: "4049-021 Porto",
    city: "Porto",
    position: {
        lat: 41.145765, lng: -8.600806
    }
}];

Marks = _.sortBy(Marks, (mark) => { return mark.key });

_.each(Marks, function(mark) {
    var gmapsCaption = mark.position.lat + ", " + mark.position.lng;
    var gmapsHref = "https://www.google.pt/maps/@" + mark.position.lat + "," + mark.position.lng + ",20z";
    mark.content = (
        <div key={mark.key}>
            <address id={mark.key}>
                <strong>{mark.name}</strong><br />
                {function() {if (mark.notes !== undefined) {
                    return (<small>{mark.notes}<br /></small>);
                }}()}
                <small>{mark.addressLine1}<br />
                {mark.addressLine2}<br />
                <a href={gmapsHref}>{gmapsCaption}</a></small>
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

function renderMarks(title, type, city) {
    return (
        <div className="row">
            <div className="col-lg-12">
                <h3>{title}</h3>
            </div>
            {getMarks(type, city).map(function(mark, i) {
                return (
                    <div key={"mark-"+i} className="col-lg-12">
                        {mark.content}
                    </div>
                );
            })}
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
                        <h1>Onde Encontrar <small>(scroll down para ver lista)</small></h1>
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
                    <div className="col-lg-4">{renderMarks('Bares', 'bar', 'Porto')}</div>
                    <div className="col-lg-4">{renderMarks('Restaurantes', 'restaurant', 'Porto')}</div>
                    <div className="col-lg-4">{renderMarks('Mercearias', 'grocery', 'Porto')}</div>
                </div>

                <div style={{marginTop: 25}} className="row">
                    <div className="col-lg-12">
                        <h1>Lisboa</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">{renderMarks('Restaurantes', 'restaurant', 'Lisboa')}</div>
                    <div className="col-lg-4">{renderMarks('Mercearias', 'grocery', 'Lisboa')}</div>
                </div>

                <div style={{marginTop: 25}} className="row">
                    <div className="col-lg-12">
                        <h1>Resto do País</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">{renderMarks('Bares', 'bar', 'Resto')}</div>
                    <div className="col-lg-4">{renderMarks('Restaurantes', 'restaurant', 'Resto')}</div>
                </div>
            </div>
        );
    }
});

// <div className="col-lg-4">{renderMarks('Bares', 'bar', 'Lisboa')}</div>
