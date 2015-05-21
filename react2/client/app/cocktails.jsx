import React from "react/addons";
import Router from "react-router";

export var Cocktails = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Cocktails</h1>
        );
    }
});
