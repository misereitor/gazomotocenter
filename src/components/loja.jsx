import React from 'react';

function Loja() {
    return(
        <div className="container-loja">
            <h2 className="h2-loja">Loja</h2>
            <div className="loja">
                <h2 className="h2-lider">Lider na região</h2>
                <div className="produtos">
                    <div className="parceiros">
                        <h3 data-anime="botton">Trabalhamos com várias marcas parceiras</h3>
                        <div className="lista-parceiros" data-anime="left">
                            <ul>
                                <li>HONDA</li>
                                <li>YAMAHA</li>
                                <li>2BARRAS</li>
                                <li>BHD</li>
                                <li>CATIMOTO</li>
                                <li>CONTROLFLEX</li>
                                <li>DANIDREA</li>
                                <li>DANNIX</li>
                                <li>DIAFRAG</li>
                            </ul>
                            <ul>
                                <li>EMBUS</li>
                                <li>EUROBREQ</li>
                                <li>FISCHER</li>
                                <li>GULF</li>
                                <li>HAMP</li>
                                <li>VEDAMOTOS</li>
                                <li>SHELL</li>
                                <li>RIALLI</li>
                                <li>REDFOX</li>
                            </ul>
                        </div>
                    </div>
                    <div className="vendas">
                        <h3 data-anime="botton">Trabalhamos com vendas de peças, serviços, Motos usadas e muito mais</h3>
                        <div className="lista-produtos" data-anime="rigth">
                            <ul>
                                <li>Pneu Pirelli</li>
                                <li>Bateria</li>
                                <li>Óleo</li>
                                <li>Cabeçote</li>
                                <li>Caixa de macha</li>
                                <li>Tanque</li>
                                <li>Escapamento</li>
                                <li>Lâmpada</li>
                            </ul>
                            <ul>
                                <li>CDI's</li>
                                <li>Filtro de combustivél</li>
                                <li>Iluminação</li>
                                <li>Velas de inigção</li>
                                <li>Kit conversores</li>
                                <li>Motor de partidas</li>
                                <li>Paineis e componentes</li>
                                <li>Fiação</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loja