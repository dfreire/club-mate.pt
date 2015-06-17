import React from "react/addons";
import Router from "react-router";
import ClassNames from "classnames";

export var SideBarControl = React.createClass({
    mixins: [Router.State],

    getInitialState: function() {
        return {
            visible: true
        }
    },

    render: function() {
        return (
            <a className={this.getClassNames()} onClick={this.handleClick} href="#" id="menu-toggle">&nbsp;</a>
        );
    },

    getClassNames: function () {
        if (this.state.visible) {
            return ClassNames('fa', 'fa-long-arrow-left');
        } else {
            return ClassNames('fa', 'fa-bars');
        }
    },

    handleClick: function(e) {
        e.preventDefault();
        this.setState({ visible: !this.state.visible });
        postal.channel("sidebar").publish("sidebar.visible", { visible: this.state.visible });
    }
});
