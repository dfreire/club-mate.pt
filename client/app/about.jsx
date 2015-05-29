import React from "react/addons";
import Router from "react-router";

export var About = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Sobre o Club-Mate</h1>
        );
    }
});
