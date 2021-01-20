import React from 'react';

function Loja() {
    return(
        <div className="container-loja">
            <h2 className="h2-loja">Loja</h2>
            <div className="loja">
                <h2 className="h2-lider">Lider na região</h2>
                <div className="produtos">
                    <div className="parceiros">
                        <h3>Trabalhamos com várias marcas parceiras</h3>
                        <ul>
                            <li>parceiro 1</li>
                            <li>parceiro 2</li>
                            <li>parceiro 3</li>
                            <li>parceiro 4</li>
                            <li>parceiro 5</li>
                        </ul>
                    </div>
                    <div className="vendas">
                        <h3>Trabalhamos com vendas de peças, serviços, Motos usadas e muito mais</h3>
                        <ul>
                            <li>produto 1</li>
                            <li>produto 2</li>
                            <li>produto 3</li>
                            <li>produto 4</li>
                            <li>produto 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loja