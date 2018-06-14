import React, { Component } from 'react';
import '../../Template1.css';
import Profile from './profile/Profile.js'
import Experience from './experience/Experience.js'


class Right extends Component {
    render() {
        return (
            <div className="template1__right">
                <Profile />
                <Experience />
            </div>
        );
    }
}

export default Right;