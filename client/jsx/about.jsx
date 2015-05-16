import {React} from "globals/react";
import {Router, Link} from "globals/react-router";

export var About = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Sobre o Club-Mate</h1>
        );
    }
});
