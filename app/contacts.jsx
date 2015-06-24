import React from "react/addons";
import Router from "react-router";

export var Contacts = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Contactos / Encomendas</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <ul style={{listStyle: "none"}}>
                            <li style={{marginTop: "15px"}}><a href="https://www.facebook.com/pages/Club-Mate-Portugal/1555501154702745">Facebook</a></li>
                            <li style={{marginTop: "15px"}}><strong>E-mail:</strong> <a href="mailto:info@club-mate.pt">info@club-mate.pt</a></li>
                            <li style={{marginTop: "15px"}}><strong>Telefone:</strong> 00351 910277546</li>
                            <li style={{marginTop: "15px"}}><strong>Telefone:</strong> 00351 914926645</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});
