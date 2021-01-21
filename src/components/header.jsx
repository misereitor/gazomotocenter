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
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;