import {React} from 'react/addons';
import {Router, Route, RouteHandler, DefaultRoute, NotFoundRoute, Redirect, Link} from "react-router"

export var About = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Sobre o Club-Mate</h1>
        );
    }
});
