import React from "react/addons";
import Router from "react-router";
var Link = Router.Link;

export var SideBar = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div id="sidebar-wrapper">
                <div>
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand"><img src="/img/club-mate-logo.png" /></li>
                        <li><Link to="/sobre-o-club-mate">Sobre o Club-Mate</Link></li>
                        <li><Link to="/yerba-mate">Yerba Mate</Link></li>
                        <li><Link to="/cocktails">Cocktails</Link></li>
                        <li><Link to="/onde-encontrar">Onde Encontrar</Link></li>
                        <li><Link to="/contactos">Contactos e Encomendas</Link></li>
                    </ul>
                </div>
                <div className="my-contact-wrapper">
                    <a className="my-contact" href="mailto:info@club-mate.pt">info@club-mate.pt</a>
                </div>
                <div>
                    <ul className="my-social-contacts-wrapper">
                        <li><a href="https://www.facebook.com/pages/Club-Mate-Portugal/1555501154702745"><i className="fa fa-facebook-square"></i></a></li>
                        <li><a href="https://instagram.com/clubmateportugal/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
});
