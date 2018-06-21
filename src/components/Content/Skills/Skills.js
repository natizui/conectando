import React from 'react';
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/typicons/plus'
// import {trash} from 'react-icons-kit/typicons/trash'

import ListItem from './ListItem.js'





const List = ({ items }) => (
    <ul>
        {
        items.map((item, i) => <ListItem key={i} id={i} value={item}  />)
        }
    </ul>
);
  

class Skills extends React.Component {
    inputValueDefault = ''

    constructor(props) {
        super(props)
    
        this.state = {
            add: false,
            inputValue: this.inputValueDefault,
            skills: ['HTML', 'CSS', 'JavaScript']
        }
    }

    onClick = () => {
        console.log('clique');
        this.setState({
            add: true
        })
      }

    
    onChange = (e) => this.setState({ inputValue: e.target.value });
  
    handleItemClick = (e) => {
        const { inputValue, skills } = this.state;
        if (inputValue) {
            const nextState = [...skills, inputValue];
            this.setState({ skills: nextState, inputValue: this.inputValueDefault });
        };
        this.setState({
            add: false
        });
    }
  
    render() {
      const { skills, inputValue } = this.state;
      return (
        <div className="template1__skills__content">
            <h2>HABILIDADES</h2>
            <List items={skills} />
            {(!this.state.add) && (<Icon onClick={this.onClick} icon={plus} />)}
            {(this.state.add) && 
                (<div>
                <input type="text" value={inputValue} onChange={this.onChange} placeholder="Habilidade "/>
                <button className="btn" onClick={this.handleItemClick}>OK</button>
                </div>) 
            }
        </div>
      );
    }
  }


export default Skills;