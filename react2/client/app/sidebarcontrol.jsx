import React from "react/addons";
import Router from "react-router";
var Link = Router.Link;

export var SideBarControl = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <a href="#" id="menu-toggle" className="fa">&nbsp;</a>
        );
    }
});
