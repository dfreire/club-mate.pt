import React from "react/addons";
import Router from "react-router";

var data = [{
    name: "Mojito-Mate",
    ingredients: [
        "Lima",
        "Açúcar amarelo",
        "Gelo em cubo ou picado",
        "Rum branco",
        "Hortelã",
        "Club-Mate"
    ],
    description: "Esmagar as limas com o açúcar e adicionar gelo. De seguida acrescentar 4 a 6 cl de rum, club-mate a gosto, e finalizar com folhas de hortelã frescas. Misturar e beber!"
}, {
    name: "Vodka-Mate",
    ingredients: [
        "Vodka",
        "Limão ou lima",
        "Gelo em cubo",
        "Club-Mate"
    ],
    description: ""
}, {
    name: "Whisky-Mate",
    ingredients: [
        "Whisky",
        "Gelo em cubo",
        "Club-Mate"
    ],
    description: ""
}, {
    name: "Mate-Meister",
    ingredients: [
        "Jagermeister",
        "Gelo em cubo",
        "Club-Mate"
    ],
    description: ""
}, {
    name: "Martini-Mate",
    ingredients: [
        "Martini Rosso",
        "Limão",
        "Gelo em cubo",
        "Club-Mate"
    ],
}, {
    name: "Long Island Mate",
    ingredients: [
        "20 cl Gin",
        "20 cl Tequilla",
        "20 cl Vodka",
        "20 cl Rum",
        "20 cl Triple Sec",
        "Limas",
        "Açúcar amarelo",
        "Gelo em cubo ou picado",
        "Club-Mate"
    ],
    description: ""
/*
}, {
    name: "",
    ingredients: [
        "",
        "",
        "",
        ""
    ],
    description: ""
*/
}];

export var Cocktails = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Cocktails</h1>
                    </div>
                </div>
                <div className="row">
                    {data.map(function(cocktail, index) {
                        var ingredientList = cocktail.ingredients.map(function(ingredient) {
                            return (<li>{ingredient}</li>);
                        });
                        return (
                            <div className="col-lg-4">
                                <div style={{background: "#eee", padding: "20px"}}>
                                    <h3 style={{marginTop: "0px"}}>{cocktail.name}</h3>
                                    <ul>
                                        {ingredientList}
                                    </ul>
                                    <p style={{textAlign: "justify"}}>{cocktail.description}</p>
                                </div>
                            </div>
                        );
                    }.bind(this))}
                </div>
            </div>
        );
    }
});
