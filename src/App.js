import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

import Template1 from './components/template1/Template1.js'
import Navbar from './components/Navbar/Navbar.js'
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada.js'
import Login from './pages/Login/Login.js'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { usuario: false }

    this.logaUsuario = this.logaUsuario.bind(this)
    this.deslogaUsuario = this.deslogaUsuario.bind(this)
  }

  logaUsuario() {
    this.setState({ usuario: true })
  }

  deslogaUsuario() {
    this.setState({ usuario: false })
  }


  render() {
    return (
      <div className="app">
        <Navbar 
          usuario={this.state.usuario}
          onSairClick={this.deslogaUsuario}
        />

        <Switch>
          <Route exact path="/" render={props => (
            this.state.usuario ? <Template1 /> : <Redirect to="/login" />
          )} />

          <Route path="/login" render={props => (
            <Login 
              onEnviarClick={this.logaUsuario} 
              historico={props.history} 
            />
          )} />
          
          <Route component={NaoEncontrada} />
        </Switch>
      </div>
    );
  }
}

export default App;
