import React, { Component } from 'react';
import '../Template1.css';
import Name1 from './name/Name1.js';
import JobTitle1 from './job/JobTitle1.js';

class Header1 extends Component {
    render() {
        return (
            <div className="template1__name">
                <Name1 />
                <JobTitle1 />
            </div>
        );
    }
  }

export default Header1;