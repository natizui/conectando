import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import Favicon from 'react-favicon';
import favicon from './favicon/favicon.png'
// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar.js'
import AllTemplates from './pages/AllTemplates/AllTemplates.js'
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
        <Favicon url={favicon} />
        <Navbar 
          usuario={this.state.usuario}
          onSairClick={this.deslogaUsuario}
        />

        <Switch>

          <Route exact path="/" render={props => (
            <AllTemplates history={props.history} />
          )} />
          <Route exact path="/conectando" render={props => (
            <AllTemplates history={props.history} />
          )} />
          
          <Route path="/modelos" render={props => (
            <AllTemplates 
            history={props.history}
            />
          )} />

          <Route path="/modelo" render={props => (
            <Templates />
          )} />

          <Route path="/login" render={props => (
            <Login 
              onEnviarClick={this.logaUsuario} 
              history={props.history} 
            />
          )} />
          
          <Route component={NotFind} />
        </Switch>

      </div>
    );
  }
}

export default App;
