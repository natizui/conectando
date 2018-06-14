import React, { Component } from 'react';
import '../../Template1.css';
import Contact from './contact/Contact.js'
import Education from './education/Education.js'
import Skills from './skills/Skills.js'

class Left extends Component {
    render() {
        return (
            <div className="template1__left">
                <Contact />
                <Education />
                <Skills />
            </div>
        );
    }
}


export default Left;