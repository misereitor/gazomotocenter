import React from 'react'

export default function Servicos() {
    return(
        <div className="service" style={{backgroundImage: "url(./img/servicos/container.jpg)"}}>
            <h2>Serviços</h2>
            <div className="services">
                <h3>Prestamos todo tipo de serviço</h3>
                <ul>
                    <li>Troca de óleo</li>
                    <li>Revisão</li>
                    <li>Serviço 3</li>
                    <li>Serviço 4</li>
                    <li>Serviço 5</li>
                    <li>Serviço 6</li>
                </ul>
            </div>
        </div>
    )
}