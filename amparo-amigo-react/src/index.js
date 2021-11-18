import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

import Header from './components/header/Header'

ReactDom.render(
    <div>
        <Header/>
        <h1>Corpo do site</h1>
    </div>,
    document.getElementById('root')
)