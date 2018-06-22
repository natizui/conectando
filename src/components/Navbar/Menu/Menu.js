import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {thMenu} from 'react-icons-kit/typicons/thMenu'

import './Menu.css'


// const props = {
//     usuario: true,
//     onSairClick: () => {}
// }

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {aberto: false}
    }
    
    handleAbreOuFecha = e => {
        this.setState(stateAnterior => {
            const proximoState = {
                aberto: !stateAnterior.aberto
            }
            
            return proximoState
        })
    }

    handleOpcaoClick = e => {
        if (this.state.aberto) {
            this.handleAbreOuFecha()
        }
    }

    handleLoginOuSair = e => {
        if (this.props.usuario) {
            this.props.onSairClick()
        }

        this.handleOpcaoClick()
    }

    render() {
        let classesDoBotao = 'navbar-menu__botao'
        let classesDasOpcoes = 'navbar-menu__opcoes'

        if (this.state.aberto) {
            classesDoBotao += ' navbar-menu__botao--aberto'
            classesDasOpcoes += ' navbar-menu__opcoes--aberto'
        }

        return (
            <nav className="navbar-menu">
                <a className={classesDoBotao} onClick={this.handleAbreOuFecha} >
                    <Icon className="menu-sandwiche" size={32} icon={thMenu} />
                </a>

                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink 
                            to="/modelos" 
                            activeClassName="navbar-menu__opcoes--ativo"
                            onClick={this.handleOpcaoClick}        
                        >
                            Modelos
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink 
                            to="/quem-somos" 
                            activeClassName="navbar-menu__opcoes--ativo"
                            onClick={this.handleOpcaoClick}
                        >
                            Quem somos
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink 
                            to="/contato" 
                            activeClassName="navbar-menu__opcoes--ativo"
                            onClick={this.handleOpcaoClick}        
                        >
                            Contato
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink 
                            to="/login" 
                            activeClassName="navbar-menu__opcoes--ativo"
                            onClick={this.handleLoginOuSair}
                        >
                            {this.props.usuario ? 'Sair' : 'Login'}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu