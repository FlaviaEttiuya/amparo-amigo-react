import './template/template.css'
import './template/lib/bootstrap/css/bootstrap.min.css'
import './index.css'

import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Sobre from './components/sobre/Sobre'
import Voluntario from './components/voluntario/Voluntario'
import Busca from './components/busca/Busca'
import Acesso from './components/acesso/Acesso'
import Footer from './components/footer/Footer'

ReactDom.render(
    <div>
        <Header/>
        <Home/>
        <Sobre/>
        <Voluntario/>
        <Busca/>
        <Acesso/>
        <Footer/>
    </div>,
    document.getElementById('root')
)