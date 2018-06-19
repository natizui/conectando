import React, { Component } from 'react';
import Li from './Li.js'
import data from '../../data.json';

import '../../../Template1.css';


let Skills = React.createClass( {
    createListItem: function (item) {
        return <Li source={item} key={item} />;
      },
    
      createList: function (items) {
        return items.map(this.createListItem);
      },


    render() {
        return (
            <div class="template1__skills">
                <div class="template1__skills__content">
                    <h2>HABILIDADES</h2>
                    <ul>
                        <li></li>
                        {this.createListItem(data.items)}
                    </ul>
                </div>
            </div>
        );
    }
})



export default Skills;