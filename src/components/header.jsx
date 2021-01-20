import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header-all">
                        <div className="img-logo">
                            <img src="/img/home/logo.png" alt="Gazo Motocenter Logo"/>
                        </div>
                        <div className="links">
                            <Link to='/'>Home</Link>
                            <Link to='/'>Loja</Link>
                            <Link to='/'>Serviços</Link>
                            <Link to='/'>Oficina</Link>
                            <Link to='/'>Como chegar</Link>
                        </div>
                        <div className="social">
                            <a href="https://api.whatsapp.com/send?phone=557588591466" target="blank"><i className="fa fa-whatsapp"></i>(75) 9 8859 1466</a>
                            <a href="https://www.facebook.com/gazomotocenter/"  target="blank"><i className="fa fa-facebook"></i>fb.com/gazomotocenter</a>
                            <a href="https://www.facebook.com/gazomotocenter/"  target="blank" className="instagram"><img src="./img/ico/Instagram-Icon.png" alt="Icone Instagram"/>@gazomotocenter</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;