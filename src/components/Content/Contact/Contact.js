import React, { Component } from 'react';
import '../../Templates/Template1/Template1.css';

import Phone from './components/Phone.js'
import Email from './components/Email.js'
import Linkedin from './components/Linkedin.js'
import Github from './components/Github.js'


class Contact extends Component {
    render() {
        return (
            <div className="template1__contact__content">
                <h2>CONTATO</h2>
                <Phone />
                <Email />
                <Linkedin />
                <Github />
            </div>
        );
    }
}



export default Contact;