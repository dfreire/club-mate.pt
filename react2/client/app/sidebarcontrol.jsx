import React from "react/addons";
import Router from "react-router";
import classNames from "classnames";

export var SideBarControl = React.createClass({
    mixins: [Router.State],

    getInitialState: function() {
        return {
            visible: true
        }
    },

    render: function() {
        console.warn("visible: ", this.state.visible);
        return (
            <a className={this.getClassName()} onClick={this.handleClick} href="#" id="menu-toggle">&nbsp;</a>
        );
    },

    getClassName: function () {
        if (this.state.visible) {
            return classNames('fa', 'fa-times');
        } else {
            return classNames('fa', 'fa-bars');
        }
    },

    handleClick: function(e) {
        e.preventDefault();
        this.setState({ visible: !this.state.visible });
    }
});
