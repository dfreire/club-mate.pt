import {React} from "globals/react"
import {Router, Route, RouteHandler, DefaultRoute, NotFoundRoute, Redirect, Link} from "globals/react-router"
import {Home} from "home";
import {About} from "about";
import {YerbaMate} from "yerba-mate";
import {Cocktails} from "cocktails";
import {WhereToFind} from "where-to-find";
import {Contacts} from "contacts";

var Container = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <div id="sidebar-wrapper">
        			<div>
        	            <ul className="sidebar-nav">
        	                <li className="sidebar-brand"><img src="/img/club-mate-logo.png" /></li>
    	                    <li><Link to="/sobre-o-club-mate">Sobre o Club-Mate</Link></li>
        	                <li><Link to="/yerba-mate">Yerba Mate</Link></li>
        	                <li><Link to="/cocktails">Cocktails</Link></li>
        	                <li><Link to="/onde-encontrar">Onde Encontrar</Link></li>
        	                <li><Link to="/contactos">Contactos</Link></li>
        	            </ul>
        			</div>
        			<div className="my-contact-wrapper">
        				<a className="my-contact" href="mailto:info@club-mate.pt">info@club-mate.pt</a>
        			</div>
        			<div>
        				<ul className="my-social-contacts-wrapper">
        					<li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
        					<li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
        					<li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        					<li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
        				</ul>
        			</div>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
        				<div className="row">
        					<div className="col-lg-12">
        						<a href="#" id="menu-toggle" className="fa">&nbsp;</a>
        					</div>
        				</div>
                        <div className="row">
                            <div className="col-lg-12">
                                <RouteHandler/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Lang = React.createClass({
    render: function() {
        return ( <RouteHandler/> );
    }
});

var routes = (
    <Route handler={Container} path="/">
        <Redirect from="/" to="/sobre-o-club-mate" />
        <Route name="about"          path="/sobre-o-club-mate"  handler={About} />
        <Route name="yerba-mate"     path="/yerba-mate"         handler={YerbaMate} />
        <Route name="cocktails"      path="/cocktails"          handler={Cocktails} />
        <Route name="where-to-find"  path="/onde-encontrar"     handler={WhereToFind} />
        <Route name="contacts"       path="/contactos"          handler={Contacts} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
