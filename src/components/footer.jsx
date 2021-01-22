import React from 'react'

function Footer() {
    return(
        <div className="footer">
            <footer>
                <div className="footer-footer">
                    <div className="rodape">
                        <h4>GAZO MOTOCENTER.</h4>
                        <p>Todos os direitos reservados.</p>
                    </div>
                    <p>Venha fazer uma visita <br/>
                    BA-542, Valença - BA, 45400-000
                    </p>
                    <div className="social">
                        <a href="https://api.whatsapp.com/send?phone=557588591466" target="blank" className="whatsapp"><img src="./img/ico/whastapp.png" alt="Icone whastapp"/>(75) 9 8859 1466</a>
                        <a href="https://www.facebook.com/gazomotocenter/"  target="blank"><i className="fa fa-facebook"></i>fb.com/gazomotocenter</a>
                        <a href="https://www.facebook.com/gazomotocenter/"  target="blank" className="instagram"><img src="./img/ico/Instagram-Icon.png" alt="Icone Instagram"/>@gazomotocenter</a>
                    </div>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/misael-miranda-6ab781186/" target="blank">Desenvolvido por Misael Miranda <img src="./img/ico/linkedin.png" alt="Icone linkedin"/></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer