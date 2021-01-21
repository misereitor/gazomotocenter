import React from 'react'

function Footer() {
    return(
        <div className="footer">
            <footer>
                <p>Venha fazer uma visita <br/>
                BA-542, Valença - BA, 45400-000
                </p>
                <div className="social">
                    <a href="https://api.whatsapp.com/send?phone=557588591466" target="blank"><i className="fa fa-whatsapp"></i>(75) 9 8859 1466</a>
                    <a href="https://www.facebook.com/gazomotocenter/"  target="blank"><i className="fa fa-facebook"></i>fb.com/gazomotocenter</a>
                    <a href="https://www.facebook.com/gazomotocenter/"  target="blank" className="instagram"><img src="./img/ico/Instagram-Icon.png" alt="Icone Instagram"/>@gazomotocenter</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer