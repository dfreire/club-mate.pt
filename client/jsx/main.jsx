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
            <div>
                <Link to="/sobre-o-club-mate">Sobre o Club-Mate</Link>&nbsp;|&nbsp;
                <Link to="/yerba-mate">Yerba Mate</Link>&nbsp;|&nbsp;
                <Link to="/cocktails">Cocktails</Link>&nbsp;|&nbsp;
                <Link to="/onde-encontrar">Onde Encontrar</Link>&nbsp;|&nbsp;
                <Link to="/contactos">Contactos</Link>
                <div className="container">
                    <RouteHandler/>
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