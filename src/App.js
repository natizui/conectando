import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar.js'
import Templates from './pages/Templates/Templates.js'
import Login from './pages/Login/Login.js'
import NotFind from './pages/NotFind/NotFind.js'


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
            <Templates />
          )} />

          <Route path="/templates" render={props => (
            this.state.usuario ? <Templates /> : <Redirect to="/login" />
          )} />

          <Route path="/login" render={props => (
            <Login 
              onEnviarClick={this.logaUsuario} 
              historico={props.history} 
            />
          )} />
          
          <Route component={NotFind} />
        </Switch>
      </div>
    );
  }
}

export default App;
