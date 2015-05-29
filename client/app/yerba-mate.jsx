import React from "react/addons";
import Router from "react-router";

export var YerbaMate = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Yerba Mate</h1>
        );
    }
});
