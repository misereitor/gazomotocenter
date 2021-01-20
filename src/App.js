import React from 'react'
import  Header from "./components/header";
import  Home from "./components/home";
import  Loja from "./components/loja";
import  Servicos from "./components/servicos";
import  Oficina from "./components/oficina";
import {BrowserRouter as Router} from 'react-router-dom'
import './styles/header.css'
import './styles/index.css'
import './styles/home.css'
import './styles/loja.css'
import './styles/servicos.css'
import './styles/oficina.css'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Home />
        <Loja />
        <Servicos />
        <Oficina />
      </Router>
    </div>
  );
}

export default App;
