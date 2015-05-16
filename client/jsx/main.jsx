import {React} from "globals/react"
import {Router, Route, RouteHandler, DefaultRoute, NotFoundRoute, Redirect, Link} from "globals/react-router"
import {Home} from "home";
import {About} from "about";

var Container = React.createClass({
    render: function() {
        return (
            <div>
                <Link to="/pt/home">home</Link> | <Link to="/pt/sobre-o-club-mate">about</Link>
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
        <Redirect from="/" to="/pt/home" />
        <Route name="home"  path="/:lang/home"              handler={Home} />
        <Route name="about" path="/:lang/sobre-o-club-mate" handler={About} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
