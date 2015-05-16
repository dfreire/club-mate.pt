import {React} from "globals/react";
import {Router, Link} from "globals/react-router";

export var WhereToFind = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <h1>Onde Encontrar</h1>
        );
    }
});
