import React from "react/addons";
import Router from "react-router";

export var YerbaMate = React.createClass({
    mixins: [Router.State],

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Yerba Mate</h1>
                    </div>
                </div>
                <div className="row">
                    <div style={{ textAlign: "justify" }} className="col-lg-6">
                        <p>É costume dizer-se, nas comunidades onde, por tradição, se bebe yerba-mate, que esta planta tem a força do café, os benefícios do chá e a euforia do chocolate.</p>
                        <p>Yerba mate é feito com as folhas naturalmente cafeinadas e nutritivas da árvore Ilex paraguerinsis e é consumido e celebrado na América-Latina desde que a tribo Aché Guayaki compreendeu os seus componentes nutritivos e revitalizantes. As folhas de yerba mate contêm 24 vitaminas e minerais, 15 amino-ácidos e muitos antioxidantes.</p>
                        <p>O Instituto Pasteur e a Sociedade Científica Parisiense concluíram em 1964 que “é difícil encontrar, em qualquer área do mundo, outra planta comparável a yerba mate no que aos valores nutricionais diz respeito”; yerba mate contém “praticamente todas as vitaminas necessárias ao ser vivo”.</p>
                        <p>Entre outras das substâncias que compõem esta planta encontram-se a cafeína, a teofilina e teobromina, componentes que também se encontram, separadamente, no chá, no café e no chocolate.</p>
                    </div>
                </div>
            </div>
        );
    }
});
