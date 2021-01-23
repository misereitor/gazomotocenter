import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll"

class Header extends Component {
    scrollHome = () => {
        scroll.scrollToTop()
    };

    scrollLoja = () => {
        if (window.innerHeight >= 1200) {
            scroll.scrollTo(650);
        } else if (window.innerHeight >= 800) {
            scroll.scrollTo(600)
        }else if (window.innerHeight >= 718) {
            scroll.scrollTo(300)
        }else if (window.innerHeight >= 700) {
            scroll.scrollTo(500)
        }else if (window.innerHeight >= 640) {
            scroll.scrollTo(300)
        }else if (window.innerHeight >= 500) {
            scroll.scrollTo(300)
        }else if (window.innerHeight >= 400) {
            scroll.scrollTo(330)
        } else if (window.innerHeight >= 320) {
            scroll.scrollTo(250)
        } else if (window.innerHeight >= 300) {
            scroll.scrollTo(280)
        } else {
            scroll.scrollTo(200)
        }
    };

    scrollServices = () => {
        if (window.innerHeight >= 1200) {
            scroll.scrollTo(1200);
        } else if (window.innerHeight >= 800) {
            scroll.scrollTo(1080)
        } else if (window.innerHeight >= 640) {
            scroll.scrollTo(700)
        } else if (window.innerHeight >= 500) {
            scroll.scrollTo(990)
        } else if (window.innerHeight >= 410) {
            scroll.scrollTo(830)
        } else if (window.innerHeight >= 400) {
            scroll.scrollTo(950)
        } else if (window.innerHeight >= 360) {
            scroll.scrollTo(800)
        } else if (window.innerHeight >= 320) {
            scroll.scrollTo(750)
        } else if (window.innerHeight >= 300) {
            scroll.scrollTo(880)
        } else {
            scroll.scrollTo(800)
        }
    };

    scrollOficina = () => {
        if (window.innerHeight >= 1200) {
            scroll.scrollTo(1700);
        } else if (window.innerHeight >= 1000) {
            scroll.scrollTo(1600);
        } else if (window.innerHeight >= 800) {
            scroll.scrollTo(1550)
        } else if (window.innerHeight >= 800) {
            scroll.scrollTo(1500)
        } else if (window.innerHeight >= 640) {
            scroll.scrollTo(1000)
        } else if (window.innerHeight >= 500) {
            scroll.scrollTo(1400)
        } else if (window.innerHeight >= 410) {
            scroll.scrollTo(1200)
        } else if (window.innerHeight >= 400) {
            scroll.scrollTo(1320)
        }  else if (window.innerHeight >= 360) {
            scroll.scrollTo(1180)
        } else if (window.innerHeight >= 320) {
            scroll.scrollTo(1150)
        } else if (window.innerHeight >= 300) {
            scroll.scrollTo(1240)
        } else {
            scroll.scrollTo(1150)
            
        }
    }

    scrollChegar = () => {
        if (window.innerHeight >= 1200) {
            scroll.scrollToBottom()
        }else if (window.innerHeight >= 800) {
            scroll.scrollTo(2050)
        }else if (window.innerHeight >= 640) {
            scroll.scrollTo(1250)
        } else if (window.innerHeight >= 600) {
            scroll.scrollTo(1950)
        } else if (window.innerHeight >= 500) {
            scroll.scrollTo(2000)
        } else if (window.innerHeight >= 410) {
            scroll.scrollTo(1600)
        } else if (window.innerHeight >= 400) {
            scroll.scrollTo(1950)
        } else if (window.innerHeight >= 360) {
            scroll.scrollTo(1600)
        } else if (window.innerHeight >= 320) {
            scroll.scrollTo(1580)
        } else if (window.innerHeight >= 300) {
            scroll.scrollTo(1900)
        } else {
            scroll.scrollTo(1800)
        }
    }

    menu = () => {
        let menu = document.querySelector(".links-mobile")
        if (menu.style.marginRight === "-15px") {
            menu.style.marginRight = "-230px"
        } else {menu.style.marginRight = "-15px"}
        
    }

    render() {
        return (
            <div>
                <header>
                    <div className="header-all">
                        <div className="img-logo">
                            <img src="/img/home/logo.png" alt="Gazo Motocenter Logo"/>
                        </div>
                        <div className="links">
                            <Link to='/' onClick={()=>this.scrollHome()}>Home</Link>
                            <Link to='/' onClick={()=>this.scrollLoja()}>Loja</Link>
                            <Link to='/' onClick={()=>this.scrollServices()}>Serviços</Link>
                            <Link to='/' onClick={()=>this.scrollOficina()}>Oficina</Link>
                            <Link to='/' onClick={()=>this.scrollChegar()}>Como chegar</Link>
                        </div>    
                        <div id="menu_mobile" onClick={() => this.menu()}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>     
                    </div>
                    <div className="links-mobile">
                            <Link to='/' onClick={()=>this.scrollHome()}>Home</Link>
                            <Link to='/' onClick={()=>this.scrollLoja()}>Loja</Link>
                            <Link to='/' onClick={()=>this.scrollServices()}>Serviços</Link>
                            <Link to='/' onClick={()=>this.scrollOficina()}>Oficina</Link>
                            <Link to='/' onClick={()=>this.scrollChegar()}>Como chegar</Link>
                    </div>  
                </header>
            </div>
        );
    }
}

export default Header