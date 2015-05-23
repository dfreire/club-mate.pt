import '../scss/main.scss';

import React from "react/addons";
import Router from "react-router";
import { DefaultRoute, Link, NotFoundRoute, Redirect , Route, RouteHandler} from 'react-router';
import ClassNames from "classnames";

import {SideBar} from "./sidebar.jsx";
import {SideBarControl} from "./sidebarcontrol.jsx";
import {About} from "./about.jsx";
import {YerbaMate} from "./yerba-mate.jsx";
import {Cocktails} from "./cocktails.jsx";
import {WhereToFind} from "./where-to-find.jsx";
import {Contacts} from "./contacts.jsx";

var subscription;

var Container = React.createClass({

    getInitialState: function() {
        return {
            visible: undefined
        }
    },

    componentDidMount: function() {
        var that = this;
        subscription = postal.channel("sidebar").subscribe("sidebar.visible", function(data) {
            that.setState({ visible: data.visible });
        });
    },

    componentWillUnmount: function() {
        postal.channel("sidebar").unsubscribe(subscription);
    },

    getWrapperClassNames: function () {
        if (this.state.visible) {
            return ClassNames('toggled');
        } else {
            return ClassNames('');
        }
    },

    render: function() {
        return (
            <div className={this.getWrapperClassNames()} id="wrapper">
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
