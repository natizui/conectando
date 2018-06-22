import React from 'react'
import './Botao.css'


function Botao(props) {
    let classes = 'botao'

    if (props.desabilitado) {
        classes += ' botao--desabilitado'
    }

    return (
        <div className="button__container">
            <button className={classes}>
                {props.children}
            </button>
        </div>
    );
}

export default Botao