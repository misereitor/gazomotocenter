import React from 'react'

function Footer() {
    return(
        <div className="footer">
            <footer>
                <div className="footer-footer">
                    <div className="rodape-endereco">
                        <p>Gazo Motocenter</p>
                        <p>Oficina mecânica de moto</p>
                        <hr style={{ color: "#f9b998", backgroundColor: "#f9b998", height: "1.7px"}}/>
                        <p>Venha fazer uma visita <br/>
                        BA-542, Valença - BA, 45400-000
                        </p>
                    </div>
                    <div className="rodape-atendimento">
                        <p>Horários de funcionamento</p>
                        <hr style={{ color: "#f9b998", backgroundColor: "#f9b998", height: "1px"}}/>
                        <p>Segunda a Sexta das 07:00 às 17:00</p>
                        <p>Sábado das 07:00 às 14:00</p>
                        <hr style={{ color: "#f9b998", backgroundColor: "#f9b998", height: "1px"}}/>
                        <p>Aceitamos todos os tipos de pagamentos</p>
                    </div>
                    <div className="social">
                        <a href="https://api.whatsapp.com/send?phone=557588591466" target="blank" className="whatsapp"><img src="./img/ico/whastapp.png" alt="Icone whastapp"/>(75) 9 8859 1466</a>
                        <a href="https://www.facebook.com/gazomotocenter/"  target="blank"><i className="fa fa-facebook"></i>fb.com/gazomotocenter</a>
                        <a href="https://www.facebook.com/gazomotocenter/"  target="blank" className="instagram"><img src="./img/ico/Instagram-Icon.png" alt="Icone Instagram"/>@gazomotocenter</a>
                    </div>
                </div>
                <hr style={{ color: "#f9b998", backgroundColor: "#f9b998", height: "2px", marginTop: "40px"}}/>
                <div className="rodape-rodape">
                    <div className="rodape">
                        <h4>GAZO MOTOCENTER.</h4>
                        <p>Todos os direitos reservados.</p>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/misael-miranda-6ab781186/" target="blank">Desenvolvido por Misael Miranda <img src="./img/ico/linkedin.png" alt="Icone linkedin"/></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer