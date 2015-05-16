import {React} from "globals/react";
import {Router, Link} from "globals/react-router";

export var Contacts = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Contactos</h1>
        );
    }
});
