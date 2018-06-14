import React, { Component } from 'react';
import '../Template1.css';
import Left from './left/Left.js'
import Right from './right/Right.js'


class Content1 extends Component {
    render() {
        return (
            <div className="template1__content">
                <Left />
                <Right />
            </div>
        );
    }
}


export default Content1;