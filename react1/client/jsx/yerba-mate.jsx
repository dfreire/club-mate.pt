import {React} from "globals/react";
import {Router, Link} from "globals/react-router";

export var YerbaMate = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Yerba Mate</h1>
        );
    }
});
