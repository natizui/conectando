import React from 'react'

import './Templates.css'

import Template1 from '../../components/Templates/Template1/Template1.js'
import Botao from '../../components/Formulario/Botao/Botao.js'

function Templates(props) {
    return (
        <main>
            <Template1 />
            <Botao>
                Baixar em PDF
            </Botao>
        </main>
    )
}

export default Templates