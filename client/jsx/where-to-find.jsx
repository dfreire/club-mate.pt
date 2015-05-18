import {React} from "globals/react";
import {Router, Link} from "globals/react-router";

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
                        <div id="map-canvas"></div>
                    </div>
                    <div className="col-lg-4">
                        <div id="casa-d-oro">
                            <address>
                                <strong>Restaurante Casa D'Oro</strong><br/>
                                Rua do Ouro, Nº797<br/>
                                4150 Porto<br/>
                                <a href="https://www.google.pt/maps/@41.148056,-8.642722,20z">41.148056, -8.642722</a><br/>
                            </address>
                        </div>
                        <div id="pizza-a-pezzi">
                            <address>
                                <strong>Restaurante Pizza à Pezzi</strong><br/>
                                Rua Dom Pedro V, Nº84 (Príncipe Real)<br/>
                                1250-001 Lisboa<br/>
                                <a href="https://www.google.pt/maps/@38.7159764,-9.1467839,20z">38.7159764, -9.1467839</a><br/>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
