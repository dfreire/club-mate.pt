import '../scss/main.scss'; 

import React from "react/addons";

import Router from "react-router";
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Link = Router.Link;

import {SideBar} from "./sidebar.jsx";
import {SideBarControl} from "./sidebarcontrol.jsx";
import {About} from "./about.jsx";
import {YerbaMate} from "./yerba-mate.jsx";
import {Cocktails} from "./cocktails.jsx";
import {WhereToFind} from "./where-to-find.jsx";
import {Contacts} from "./contacts.jsx";

var Container = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <SideBar />
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <SideBarControl />
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

Router.run(routes/*, Router.HistoryLocation*/, function (Handler) {
    React.render(<Handler />, document.getElementById('app'));
});