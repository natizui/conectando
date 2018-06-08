import React, { Component } from 'react';
import './template1.css';
import Name1 from './Name1.js';
// import Title1 from './Title1.js';

class Header1 extends Component {
    render() {
        return (
            <div className="template1__name">
                <Name1 />
                {/* <Title1 /> */}
            </div>
        );
    }
  }

export default Header1;