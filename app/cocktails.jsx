import React from "react/addons";
import Router from "react-router";

var cocktailList = [{
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
    description: "Esmagar as limas com o açúcar e adicionar gelo. Acrescentar as 5 bebidas e club-mate. Misturar gentilmente e beber!"
}, {
    name: "Mate-Meister",
    ingredients: [
        "Jagermeister",
        "Gelo em cubo",
        "Club-Mate"
    ],
    description: ""
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
    name: "Martini-Mate",
    ingredients: [
        "Martini Rosso",
        "Limão",
        "Gelo em cubo",
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

var rows = [
    [ cocktailList[0],  cocktailList[1],  cocktailList[2] ],
    [ cocktailList[3],  cocktailList[4],  cocktailList[5] ],
];


function renderCocktail(cocktail, i) {
    var ingredientTags = cocktail.ingredients.map(function(ingredient, j) {
        return (<li key={"ing-"+j}><small>{ingredient}</small></li>);
    });
    return (
        <div key={"cocktail-"+i} className="col-lg-4">
            <div style={{background: "#f5f5f5", padding: "20px", marginBottom: "30px", height: "320px" }} >
                <h3 style={{marginTop: "0px"}}>{cocktail.name}</h3>
                <ul>
                    {ingredientTags}
                </ul>
                <small style={{textAlign: "justify"}}>{cocktail.description}</small>
            </div>
        </div>
    );
};

function renderRow(row) {
    var cocktailTags = row.map(function(cocktail, i) {
        return renderCocktail(cocktail, i);
    });
    return (
        <div className="row">
            {cocktailTags}
        </div>
    );
};

function renderRows() {
    var rowsTag = rows.map(function(row) {
        return renderRow(row);
    });
    return ({rowsTag});
};

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
                {renderRows()}
            </div>
        );
    }
});
