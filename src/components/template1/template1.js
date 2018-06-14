import React, { Component } from 'react';
import './Template1.css';
import Header1 from './header/Header1.js';
import Content1 from './content/Content1.js'

class Template1 extends Component {
    render() {
      return (
        <div className="template1__geral">
            <Header1 />
            <Content1 />
        </div>
      );
    }
  }


export default Template1;