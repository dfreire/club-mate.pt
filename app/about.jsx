import React from "react/addons";
import Router from "react-router";

export var About = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Sobre o Club-Mate</h1>
                    </div>
                </div>
                <div className="row">
                    <div style={{ textAlign: "justify" }} className="col-lg-6">
                        <p>Club-Mate é uma bebida refrescante e ativa com gás feita a partir de yerba mate. Não contém álcool, glúten ou lactose e tem níveis de açúcar baixos comparativamente a outros refrigerantes. As propriedades ativas da yerba mate- entre as quais a cafeína- fazem com que club-mate tenha um efeito positivo no metabolismo, sistema nervoso e concentração, sendo portanto uma bebida naturalmente eficaz contra a fadiga.</p>
                        <p>Club-Mate tem por base apenas ingredientes naturais e pode ser consumido por vegans e vegetarianos. É também um produto ecológico, dado que só está disponível em garrafas de vidro.</p>
                        <p>Depois de se ter tornado um símbolo da cena cultural berlinense, com o seu sabor distinto e efeito revigorante, Club-Mate tem vindo a conquistar pessoas em todo o mundo.</p>
                    </div>
                    <div style={{ textAlign: "center" }} className="col-lg-5">
                        <img src="/img/club-mate-translucid-rotated.png" />
                    </div>
                </div>
            </div>
        );
    }
});
