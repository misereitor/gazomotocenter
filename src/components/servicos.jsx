import React from 'react'

export default function Servicos() {
    return(
        <div className="service">
            <h2>Serviços</h2>
            <div className="services">
                <h3 data-anime="botton">Prestamos todo tipo de serviço</h3>
                <div className="lista-servico" >
                    <ul data-anime="left">
                        <li>Troca de óleo</li>
                        <li>Troca de pneu</li>
                        <li>Revisão</li>
                        <li>Motor</li>
                        <li>Pintura</li>
                        <li>Reboque de moto</li>
                    </ul>
                    <ul data-anime="rigth">
                        <li>Vazamentos</li>
                        <li>Suspenção</li>
                        <li>Embreagem</li>
                        <li>Elétrica</li>
                        <li>Troca de peças em geral</li>
                        <li>Serviços de transporte</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}