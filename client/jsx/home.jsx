import {React} from "globals/react";
import {Router, Link} from "globals/react-router";

export var Home = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Club-Mate</h1>
        );
    }
});
