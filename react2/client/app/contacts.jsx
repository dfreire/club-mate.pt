import React from "react/addons";
import Router from "react-router";

export var Contacts = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Contactos</h1>
        );
    }
});
